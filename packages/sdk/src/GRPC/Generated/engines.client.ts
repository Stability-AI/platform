/* eslint-disable */
// @ts-nocheck
// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "engines.proto" (package "gooseai", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { EnginesService } from "./engines";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { Engines } from "./engines";
import type { ListEnginesRequest } from "./engines";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service gooseai.EnginesService
 */
export interface IEnginesServiceClient {
  /**
   * @generated from protobuf rpc: ListEngines(gooseai.ListEnginesRequest) returns (gooseai.Engines);
   */
  listEngines(
    input: ListEnginesRequest,
    options?: RpcOptions
  ): UnaryCall<ListEnginesRequest, Engines>;
}
/**
 * @generated from protobuf service gooseai.EnginesService
 */
export class EnginesServiceClient
  implements IEnginesServiceClient, ServiceInfo
{
  typeName = EnginesService.typeName;
  methods = EnginesService.methods;
  options = EnginesService.options;
  constructor(private readonly _transport: RpcTransport) {}
  /**
   * @generated from protobuf rpc: ListEngines(gooseai.ListEnginesRequest) returns (gooseai.Engines);
   */
  listEngines(
    input: ListEnginesRequest,
    options?: RpcOptions
  ): UnaryCall<ListEnginesRequest, Engines> {
    const method = this.methods[0],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<ListEnginesRequest, Engines>(
      "unary",
      this._transport,
      method,
      opt,
      input
    );
  }
}
