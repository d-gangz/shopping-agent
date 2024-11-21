"use client";

import { useChat } from "ai/react";
import { ToolResult } from "@/app/api/chat/route";
import { useScrollToBottom } from "@/lib/hooks/use-scroll-to-bottom";
import { Item } from "@/lib/constants";

// Add a new ItemCard component
function ItemCard({ item }: { item: Item }) {
  return (
    <div
      onClick={() => window.open(item.buyLink, "_blank")}
      className="flex flex-col p-4 border rounded-lg shadow-sm min-w-[250px] max-w-[300px] bg-white hover:bg-gray-50 transition-colors cursor-pointer group"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold group-hover:text-blue-600 transition-colors">
          {item.name}
        </h3>
        <span className="font-semibold text-lg">${item.price.toFixed(2)}</span>
      </div>

      <p className="text-sm text-gray-600 flex-grow mb-2">{item.description}</p>

      <div className="flex items-center justify-between text-xs">
        <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-600 capitalize">
          {item.type}
        </span>
        <span className="text-blue-500 group-hover:underline">
          View Details →
        </span>
      </div>
    </div>
  );
}

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      initialMessages: [
        {
          id: "initial-message",
          role: "assistant",
          content: `Hello! 👋 I'm your pet shop assistant, specializing in dog products. I can help you find the perfect items for your furry friend in these categories:

• 🦴 Toys - Interactive and durable toys for play
• 🛏️ Beds - Comfortable sleeping solutions
• 🍖 Food - High-quality nutrition options
• ✂️ Grooming - Tools for coat and hygiene
• 🎯 Training - Equipment for behavioral training
• ❤️ Health - Products for wellness and care

Tell me about your dog and what you're looking for, and I'll help you find the best products!`,
        },
      ],
    });
  const [containerRef, endRef] = useScrollToBottom<HTMLDivElement>();

  console.log("messages", messages);

  return (
    <div className="flex flex-col h-[100dvh]">
      <div className="flex-1 overflow-y-auto mb-4" ref={containerRef}>
        <div className="max-w-2xl mx-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id}>
              {/* Display user and assistant messages if message.content is not empty */}
              {message.content && (
                <div
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === "user"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              )}

              {/* Display UI based on tool results if any */}
              {message.role === "assistant" &&
                message.toolInvocations?.map((tool) => {
                  if (tool.state === "result") {
                    const result = tool.result as ToolResult;
                    return (
                      <div key={tool.toolCallId} className="my-4">
                        <div className="flex justify-start mb-4">
                          <div className="rounded-lg px-4 py-2 max-w-[80%] bg-gray-200 text-black">
                            {result.reply}
                          </div>
                        </div>

                        <div className="overflow-x-auto">
                          <div className="flex gap-4 py-2">
                            {result.items.map((item, index) => (
                              <ItemCard key={index} item={item} />
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
            </div>
          ))}
        </div>
        <div ref={endRef} />
      </div>

      <div className="max-w-2xl mx-auto w-full px-4 pb-4 pb-safe">
        <form onSubmit={handleSubmit} className="flex gap-2 sticky bottom-0">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message..."
            className="flex-1 rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
