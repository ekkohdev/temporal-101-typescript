import { Client } from "@temporalio/client";
import { uuid4 } from "@temporalio/workflow";

import { greeting } from "../workflows.js";

async function run() {
  const client = new Client();
  const result = await client.workflow.execute(greeting, {
    taskQueue: "translation-tasks",
    workflowId: "workflow-" + uuid4(),
    args: ["Tina"],
  });

  console.log(`The greeting Workflow returned: ${result}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
