import { Worker } from "@temporalio/worker";
import * as activities from "./activities.js";

import { URL } from "url";
import path from "path";

async function run() {
  const worker = await Worker.create({
    workflowsPath: new URL(`./workflows${path.extname(import.meta.url)}`, import.meta.url).pathname,
    taskQueue: "translation-tasks",
    activities,
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
