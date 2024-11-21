# Guidelines for tool calling

- In the tool configuration, the parameters to call are the required arguments to be feed into the function to execute which is under the `execute` key.

Below are some code samples for to create the tools for tool calling using Vercel AI SDK. 

```tsx
import { tool } from "ai";
import { z } from "zod";

// executeGetFlights execution function
async function executeGetFlights(arrivalLocation: string) {
  const result = flights.filter(
    (flight) => flight.arrivalLocation === arrivalLocation
  );
  return result.length > 0 ? result : "No flights found";
}

// getFlights tool configuration
const getFlightsTool = tool({
  description: "Get flights to a destination",
  parameters: z.object({
    arrivalLocation: z
      .string()
      .describe("City, Country (Example: New York, USA)"),
  }),
  execute: async ({ arrivalLocation }) => executeGetFlights(arrivalLocation),
});
```