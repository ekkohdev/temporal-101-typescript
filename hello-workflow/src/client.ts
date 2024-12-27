import { Connection, Client } from "@temporalio/client";
import { uuid4 } from "@temporalio/workflow";

import { example } from "./workflows.js";

async function run() {
  // Connect to the default Server location
  const connection = await Connection.connect({ address: "localhost:7233" });
  // In production, pass options to configure TLS and other settings:
  // {
  //   address: 'foo.bar.tmprl.cloud',
  //   tls: {}
  // }

  const client = new Client({
    connection,
    // namespace: 'foo.bar', // connects to 'default' namespace if not specified
  });

  const handle = await client.workflow.start(example, {
    taskQueue: "greeting-tasks",
    // in practice, use a meaningful business ID, like customerId or transactionId
    workflowId: "workflow-" + uuid4(),
    // type inference works! args: [name: string]
    args: ["Temporal"],
  });
  console.log(`Started workflow ${handle.workflowId}`);

  // optional: wait for client result
  console.log(await handle.result()); // Hello, Temporal!
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
