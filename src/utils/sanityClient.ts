import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "ba63mod0",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2021-10-21", // use current date (YYYY-MM-DD) to target the latest API version
};
const client = createClient(config);

export {client}
