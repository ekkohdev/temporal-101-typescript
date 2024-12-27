import { Connection, Client } from "@temporalio/client";
import { uuid4 } from "@temporalio/workflow";

import { CertificateGeneratorWorkflow } from "./workflows.js";

async function run() {
  const connection = await Connection.connect();
  const client = new Client({
    connection,
  });

  const handle = await client.workflow.start(CertificateGeneratorWorkflow, {
    taskQueue: "generate-certificate-taskqueue",
    workflowId: "cert-generator-workflow-" + uuid4(),
    args: ["Chris Simmons"],
  });

  console.log(`Started workflow ${handle.workflowId}`);
  console.log(`You can find your certificate of completion here:`, await handle.result());
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
