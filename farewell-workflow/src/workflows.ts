import { proxyActivities } from "@temporalio/workflow";
import type * as activities from "./activities.js";

const { getSpanishGreeting, getSpanishFarewell } = proxyActivities<typeof activities>({
  startToCloseTimeout: "10 seconds",
});

export async function greeting(name: string): Promise<string> {
  return await getSpanishGreeting(name);
}

export async function farewell(name: string): Promise<string> {
  return await getSpanishFarewell(name);
}

export async function helloGoodbye(name: string): Promise<string> {
  const greeting = await getSpanishGreeting(name);
  const farewell = await getSpanishFarewell(name);

  const helloGoodbye = "\n" + greeting + "\n" + farewell;

  return helloGoodbye;
}
