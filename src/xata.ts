// Generated by Xata Codegen 0.23.5. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "job",
    columns: [
      { name: "location", type: "string" },
      {
        name: "link",
        type: "string",
        notNull: true,
        defaultValue: "https://jamesqquick.com/",
      },
      {
        name: "company",
        type: "string",
        notNull: true,
        defaultValue: "Test Company",
      },
      {
        name: "title",
        type: "string",
        notNull: true,
        defaultValue: "Developer Job",
      },
      { name: "type", type: "string", notNull: true, defaultValue: "Fulltime" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Job = InferredTypes["job"];
export type JobRecord = Job & XataRecord;

export type DatabaseSchema = {
  job: JobRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Playground-3hae5b.eu-west-1.xata.sh/db/nextjs-xata-job-board",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
