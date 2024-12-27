import { Client } from "@temporalio/client";
import { uuid4 } from "@temporalio/workflow";

import { farewell } from "../workflows.js";

async function run() {
  const client = new Client();
  const result = await client.workflow.execute(farewell, {
    taskQueue: "translation-tasks",
    workflowId: "workflow-" + uuid4(),
    args: ["Tina"],
  });

  console.log(`The farewell Workflow returned: ${result}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
