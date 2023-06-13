import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

import PackageJSON from "../../package.json";

export * from "./Generated/dashboard";
export * from "./Generated/dashboard.client";
export * from "./Generated/engines";
export * from "./Generated/engines.client";
export * from "./Generated/generation";
export * from "./Generated/generation.client";
export * from "./Generated/project";
export * from "./Generated/project.client";

export const createWebTransport = ({
  apiKey,
  baseURL = "https://grpc.stability.ai",
  clientID = "typescript-platform-sdk",
}: {
  apiKey: string;
  baseURL?: string;
  clientID?: string;
}) =>
  new GrpcWebFetchTransport({
    baseUrl: baseURL,
    meta: {
      Authorization: `Bearer ${apiKey}`,

      "stability-channel-id": "typescript-sdk",
      "stability-client-id": clientID,
      "stability-client-version": PackageJSON.version,
    },
  });