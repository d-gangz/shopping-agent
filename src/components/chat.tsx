"use client";

import { useChat } from "ai/react";
import { ToolResult } from "@/app/api/chat/route";
import { useScrollToBottom } from "@/lib/hooks/use-scroll-to-bottom";

// Add a new ItemCard component
function ItemCard({
  item,
}: {
  item: { name: string; description: string; buyLink: string };
}) {
  return (
    <div className="flex flex-col p-4 border rounded-lg shadow-sm min-w-[250px] max-w-[300px] bg-white">
      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
      <p className="text-sm text-gray-600 flex-grow mb-4">{item.description}</p>
      <a
        href={item.buyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition-colors text-center"
      >
        Buy Now
      </a>
    </div>
  );
}

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();
  const [containerRef, endRef] = useScrollToBottom<HTMLDivElement>();

  console.log("messages", messages);

  return (
    <div className="flex flex-col h-screen">
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

      <div className="max-w-2xl mx-auto w-full px-4 pb-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message..."
            className="flex-1 rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
