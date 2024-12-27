# Java Activity & Worker

One of the benefits of Temporal is that it provides SDKs for several languages and you can use multiple languages in the context of a single Workflow. For example, you might write your Workflow in TypeScript but use Java or Go for an Activity in that workflow.

The last exercise in this workshop does exactly that. The Workflow itself is written in TypeScript, but the Activity that is executed as part of this Workflow is written in Java, as is the Worker that runs it. Since the Activity is written in Java, it's able to use a Java graphics library that would otherwise be would be incompatible with a typical TypeScript program.

## Install OpenJDK

Install the version of OpenJDK defined in `mise.toml`:

```bash
mise install
```

## Start the Java Worker

In one terminal, run the following command:

```bash
java -classpath java-activity-and-worker.jar io.temporal.training.PdfCertWorker
```
