import { proxyActivities } from "@temporalio/workflow";

const { CreatePdf } = proxyActivities({
  startToCloseTimeout: "1 minute",
});

export async function CertificateGeneratorWorkflow(name: string): Promise<string> {
  // CreatePdf is the Activity Type defined in the Java Activity code
  /* eslint-disable @typescript-eslint/no-unsafe-return */
  return await CreatePdf(name);
}
