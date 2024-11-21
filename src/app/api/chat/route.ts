import { openai } from "@ai-sdk/openai";
import { streamText, tool } from "ai";
import { z } from "zod";
import { itemsArray, Item } from "@/lib/constants";

// Add type definition for the tool result
export type ToolResult = {
  reply: string;
  items: Item[];
};

// Tool to get items by type
const getItemsByTypeTool = tool({
  description:
    "Get product recommendations by type (bbq or cat), with optional exclusions. If user has already seen all items and they still want to see them again, you should use this tool again.",
  parameters: z.object({
    type: z
      .enum(["bbq", "cat"])
      .describe("Type of items to retrieve (bbq or cat)"),
    excludeItems: z
      .array(z.string())
      .describe(
        "Names of items to exclude. Please only exclude items you've already seen and use exact names. If you don't have any items to exclude, leave this blank."
      )
      .optional(),
  }),
  execute: async ({ type, excludeItems = [] }): Promise<ToolResult> => {
    const items = itemsArray
      .filter((item) => item.type === type && !excludeItems.includes(item.name))
      .slice(0, 3);

    return {
      reply:
        items.length === 0
          ? "Oh you have already seen all the items! Would you like to see them again?"
          : `Here are some ${type} items I found:`,
      items: items,
    };
  },
});

const tools = {
  getItemsByType: getItemsByTypeTool,
};

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o"),
    system: `You are a helpful shopping assistant specializing in BBQ equipment and cat products. 
You can only provide recommendations for these two categories.
- For BBQ equipment, you can help customers find grills, accessories, and cooking tools
- For cat products, you can help customers find cat furniture, litter boxes, and other cat care items
Please ask users to specify whether they're interested in BBQ or cat products if unclear.
Use the getItemsByType tool to fetch relevant product recommendations. You should always use the tool to fetch items.`,
    messages,
    tools,
  });

  return result.toDataStreamResponse();
}
