/* eslint-disable */
// @ts-nocheck
// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "project.proto" (package "gooseai", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ProjectService } from "./project";
import type { DeleteAssetsResponse } from "./project";
import type { DeleteAssetsRequest } from "./project";
import type { QueryAssetsResponse } from "./project";
import type { QueryAssetsRequest } from "./project";
import type { UntagAssetsResponse } from "./project";
import type { UntagAssetsRequest } from "./project";
import type { TagAssetsResponse } from "./project";
import type { TagAssetsRequest } from "./project";
import type { DeleteProjectRequest } from "./project";
import type { GetProjectRequest } from "./project";
import type { ListProjectRequest } from "./project";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { UpdateProjectRequest } from "./project";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { Project } from "./project";
import type { CreateProjectRequest } from "./project";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 *
 * gRPC services
 *
 *
 * @generated from protobuf service gooseai.ProjectService
 */
export interface IProjectServiceClient {
  /**
   * Create a new project if it does not exist
   *
   * @generated from protobuf rpc: Create(gooseai.CreateProjectRequest) returns (gooseai.Project);
   */
  create(
    input: CreateProjectRequest,
    options?: RpcOptions
  ): UnaryCall<CreateProjectRequest, Project>;
  /**
   * Update an existing project
   *
   * @generated from protobuf rpc: Update(gooseai.UpdateProjectRequest) returns (gooseai.Project);
   */
  update(
    input: UpdateProjectRequest,
    options?: RpcOptions
  ): UnaryCall<UpdateProjectRequest, Project>;
  /**
   * List all the projects for an organization
   *
   * @generated from protobuf rpc: List(gooseai.ListProjectRequest) returns (stream gooseai.Project);
   */
  list(
    input: ListProjectRequest,
    options?: RpcOptions
  ): ServerStreamingCall<ListProjectRequest, Project>;
  /**
   * Get a project
   *
   * @generated from protobuf rpc: Get(gooseai.GetProjectRequest) returns (gooseai.Project);
   */
  get(
    input: GetProjectRequest,
    options?: RpcOptions
  ): UnaryCall<GetProjectRequest, Project>;
  /**
   * Delete a project
   *
   * @generated from protobuf rpc: Delete(gooseai.DeleteProjectRequest) returns (gooseai.Project);
   */
  delete(
    input: DeleteProjectRequest,
    options?: RpcOptions
  ): UnaryCall<DeleteProjectRequest, Project>;
  /**
   * Add or remove tags from an asset
   *
   * @generated from protobuf rpc: TagAssets(gooseai.TagAssetsRequest) returns (gooseai.TagAssetsResponse);
   */
  tagAssets(
    input: TagAssetsRequest,
    options?: RpcOptions
  ): UnaryCall<TagAssetsRequest, TagAssetsResponse>;
  /**
   * @generated from protobuf rpc: UntagAssets(gooseai.UntagAssetsRequest) returns (gooseai.UntagAssetsResponse);
   */
  untagAssets(
    input: UntagAssetsRequest,
    options?: RpcOptions
  ): UnaryCall<UntagAssetsRequest, UntagAssetsResponse>;
  /**
   * Query the assets of a project, with additional filtering
   *
   * @generated from protobuf rpc: QueryAssets(gooseai.QueryAssetsRequest) returns (gooseai.QueryAssetsResponse);
   */
  queryAssets(
    input: QueryAssetsRequest,
    options?: RpcOptions
  ): UnaryCall<QueryAssetsRequest, QueryAssetsResponse>;
  /**
   * Delete one or more assets of a project
   *
   * @generated from protobuf rpc: DeleteAssets(gooseai.DeleteAssetsRequest) returns (gooseai.DeleteAssetsResponse);
   */
  deleteAssets(
    input: DeleteAssetsRequest,
    options?: RpcOptions
  ): UnaryCall<DeleteAssetsRequest, DeleteAssetsResponse>;
}
/**
 *
 * gRPC services
 *
 *
 * @generated from protobuf service gooseai.ProjectService
 */
export class ProjectServiceClient
  implements IProjectServiceClient, ServiceInfo
{
  typeName = ProjectService.typeName;
  methods = ProjectService.methods;
  options = ProjectService.options;
  constructor(private readonly _transport: RpcTransport) {}
  /**
   * Create a new project if it does not exist
   *
   * @generated from protobuf rpc: Create(gooseai.CreateProjectRequest) returns (gooseai.Project);
   */
  create(
    input: CreateProjectRequest,
    options?: RpcOptions
  ): UnaryCall<CreateProjectRequest, Project> {
    const method = this.methods[0],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<CreateProjectRequest, Project>(
      "unary",
      this._transport,
      method,
      opt,
      input
    );
  }
  /**
   * Update an existing project
   *
   * @generated from protobuf rpc: Update(gooseai.UpdateProjectRequest) returns (gooseai.Project);
   */
  update(
    input: UpdateProjectRequest,
    options?: RpcOptions
  ): UnaryCall<UpdateProjectRequest, Project> {
    const method = this.methods[1],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<UpdateProjectRequest, Project>(
      "unary",
      this._transport,
      method,
      opt,
      input
    );
  }
  /**
   * List all the projects for an organization
   *
   * @generated from protobuf rpc: List(gooseai.ListProjectRequest) returns (stream gooseai.Project);
   */
  list(
    input: ListProjectRequest,
    options?: RpcOptions
  ): ServerStreamingCall<ListProjectRequest, Project> {
    const method = this.methods[2],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<ListProjectRequest, Project>(
      "serverStreaming",
      this._transport,
      method,
      opt,
      input
    );
  }
  /**
   * Get a project
   *
   * @generated from protobuf rpc: Get(gooseai.GetProjectRequest) returns (gooseai.Project);
   */
  get(
    input: GetProjectRequest,
    options?: RpcOptions
  ): UnaryCall<GetProjectRequest, Project> {
    const method = this.methods[3],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<GetProjectRequest, Project>(
      "unary",
      this._transport,
      method,
      opt,
      input
    );
  }
  /**
   * Delete a project
   *
   * @generated from protobuf rpc: Delete(gooseai.DeleteProjectRequest) returns (gooseai.Project);
   */
  delete(
    input: DeleteProjectRequest,
    options?: RpcOptions
  ): UnaryCall<DeleteProjectRequest, Project> {
    const method = this.methods[4],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<DeleteProjectRequest, Project>(
      "unary",
      this._transport,
      method,
      opt,
      input
    );
  }
  /**
   * Add or remove tags from an asset
   *
   * @generated from protobuf rpc: TagAssets(gooseai.TagAssetsRequest) returns (gooseai.TagAssetsResponse);
   */
  tagAssets(
    input: TagAssetsRequest,
    options?: RpcOptions
  ): UnaryCall<TagAssetsRequest, TagAssetsResponse> {
    const method = this.methods[5],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<TagAssetsRequest, TagAssetsResponse>(
      "unary",
      this._transport,
      method,
      opt,
      input
    );
  }
  /**
   * @generated from protobuf rpc: UntagAssets(gooseai.UntagAssetsRequest) returns (gooseai.UntagAssetsResponse);
   */
  untagAssets(
    input: UntagAssetsRequest,
    options?: RpcOptions
  ): UnaryCall<UntagAssetsRequest, UntagAssetsResponse> {
    const method = this.methods[6],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<UntagAssetsRequest, UntagAssetsResponse>(
      "unary",
      this._transport,
      method,
      opt,
      input
    );
  }
  /**
   * Query the assets of a project, with additional filtering
   *
   * @generated from protobuf rpc: QueryAssets(gooseai.QueryAssetsRequest) returns (gooseai.QueryAssetsResponse);
   */
  queryAssets(
    input: QueryAssetsRequest,
    options?: RpcOptions
  ): UnaryCall<QueryAssetsRequest, QueryAssetsResponse> {
    const method = this.methods[7],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<QueryAssetsRequest, QueryAssetsResponse>(
      "unary",
      this._transport,
      method,
      opt,
      input
    );
  }
  /**
   * Delete one or more assets of a project
   *
   * @generated from protobuf rpc: DeleteAssets(gooseai.DeleteAssetsRequest) returns (gooseai.DeleteAssetsResponse);
   */
  deleteAssets(
    input: DeleteAssetsRequest,
    options?: RpcOptions
  ): UnaryCall<DeleteAssetsRequest, DeleteAssetsResponse> {
    const method = this.methods[8],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<DeleteAssetsRequest, DeleteAssetsResponse>(
      "unary",
      this._transport,
      method,
      opt,
      input
    );
  }
}
