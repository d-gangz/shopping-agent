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
    "Get dog product recommendations by type (toys, beds, food, grooming, training, health), with optional exclusions.",
  parameters: z.object({
    type: z
      .enum(["toys", "beds", "food", "grooming", "training", "health"])
      .describe("Type of dog items to retrieve"),
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
          ? "Oh you have already seen all the items in this category! Would you like to see them again? Or maybe you'd like to try a different category (toys, beds, food, grooming, training, health)?"
          : `Here are some ${type} items I found for your dog:`,
      items: items,
    };
  },
});

const tools = {
  getItemsByType: getItemsByTypeTool,
};

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4"),
    system: `You are a helpful pet shop assistant specializing in dog products. 
You can recommend products in the following categories:
- Toys: Interactive and durable toys for play and mental stimulation
- Beds: Comfortable sleeping solutions for all dog sizes
- Food: High-quality nutrition for different life stages
- Grooming: Tools and products for maintaining coat and hygiene
- Training: Equipment and tools for behavioral training
- Health: Products for wellness and preventive care

Please ask users about their dog's size, age, or specific needs if unclear.
Use the getItemsByType tool to fetch relevant product recommendations. You should always use the tool to fetch items.
When recommending products, consider factors like the dog's size, age, and activity level if mentioned by the user.`,
    messages,
    tools,
  });

  return result.toDataStreamResponse();
}
