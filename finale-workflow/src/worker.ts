import { Worker } from "@temporalio/worker";

import { URL } from "url";
import path from "path";

async function run() {
  const worker = await Worker.create({
    workflowsPath: new URL(`./workflows${path.extname(import.meta.url)}`, import.meta.url).pathname,
    taskQueue: "generate-certificate-taskqueue",
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
