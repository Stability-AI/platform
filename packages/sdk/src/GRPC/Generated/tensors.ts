/* eslint-disable */
// @ts-nocheck
// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "tensors.proto" (package "tensors", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message tensors.Tensor
 */
export interface Tensor {
  /**
   * @generated from protobuf field: tensors.Dtype dtype = 1;
   */
  dtype: Dtype;
  /**
   * @generated from protobuf field: repeated int64 shape = 2;
   */
  shape: bigint[];
  /**
   * @generated from protobuf field: bytes data = 3;
   */
  data: Uint8Array;
  /**
   * @generated from protobuf field: optional tensors.AttributeType attr_type = 4;
   */
  attrType?: AttributeType;
}
/**
 * @generated from protobuf message tensors.Attribute
 */
export interface Attribute {
  /**
   * @generated from protobuf field: string name = 1;
   */
  name: string;
  /**
   * @generated from protobuf oneof: value
   */
  value:
    | {
        oneofKind: "module";
        /**
         * @generated from protobuf field: tensors.Module module = 3;
         */
        module: Module;
      }
    | {
        oneofKind: "tensor";
        /**
         * @generated from protobuf field: tensors.Tensor tensor = 4;
         */
        tensor: Tensor;
      }
    | {
        oneofKind: "string";
        /**
         * @generated from protobuf field: string string = 5;
         */
        string: string;
      }
    | {
        oneofKind: "int64";
        /**
         * @generated from protobuf field: int64 int64 = 6;
         */
        int64: bigint;
      }
    | {
        oneofKind: "float";
        /**
         * @generated from protobuf field: float float = 7;
         */
        float: number;
      }
    | {
        oneofKind: "bool";
        /**
         * @generated from protobuf field: bool bool = 8;
         */
        bool: boolean;
      }
    | {
        oneofKind: undefined;
      };
}
/**
 * @generated from protobuf message tensors.Module
 */
export interface Module {
  /**
   * @generated from protobuf field: string name = 1;
   */
  name: string;
  /**
   * @generated from protobuf field: repeated string names = 2;
   */
  names: string[];
  /**
   * @generated from protobuf field: repeated tensors.Attribute attributes = 3;
   */
  attributes: Attribute[];
}
/**
 * @generated from protobuf enum tensors.Dtype
 */
export enum Dtype {
  /**
   * @generated from protobuf enum value: DT_INVALID = 0;
   */
  DT_INVALID = 0,
  /**
   * @generated from protobuf enum value: DT_FLOAT32 = 1;
   */
  DT_FLOAT32 = 1,
  /**
   * @generated from protobuf enum value: DT_FLOAT64 = 2;
   */
  DT_FLOAT64 = 2,
  /**
   * @generated from protobuf enum value: DT_FLOAT16 = 3;
   */
  DT_FLOAT16 = 3,
  /**
   * @generated from protobuf enum value: DT_BFLOAT16 = 4;
   */
  DT_BFLOAT16 = 4,
  /**
   * @generated from protobuf enum value: DT_COMPLEX32 = 5;
   */
  DT_COMPLEX32 = 5,
  /**
   * @generated from protobuf enum value: DT_COMPLEX64 = 6;
   */
  DT_COMPLEX64 = 6,
  /**
   * @generated from protobuf enum value: DT_COMPLEX128 = 7;
   */
  DT_COMPLEX128 = 7,
  /**
   * @generated from protobuf enum value: DT_UINT8 = 8;
   */
  DT_UINT8 = 8,
  /**
   * @generated from protobuf enum value: DT_INT8 = 9;
   */
  DT_INT8 = 9,
  /**
   * @generated from protobuf enum value: DT_INT16 = 10;
   */
  DT_INT16 = 10,
  /**
   * @generated from protobuf enum value: DT_INT32 = 11;
   */
  DT_INT32 = 11,
  /**
   * @generated from protobuf enum value: DT_INT64 = 12;
   */
  DT_INT64 = 12,
  /**
   * @generated from protobuf enum value: DT_BOOL = 13;
   */
  DT_BOOL = 13,
  /**
   * @generated from protobuf enum value: DT_QUINT8 = 14;
   */
  DT_QUINT8 = 14,
  /**
   * @generated from protobuf enum value: DT_QINT8 = 15;
   */
  DT_QINT8 = 15,
  /**
   * @generated from protobuf enum value: DT_QINT32 = 16;
   */
  DT_QINT32 = 16,
  /**
   * @generated from protobuf enum value: DT_QUINT4_2 = 17;
   */
  DT_QUINT4_2 = 17,
}
/**
 * @generated from protobuf enum tensors.AttributeType
 */
export enum AttributeType {
  /**
   * @generated from protobuf enum value: AT_PARAMETER = 0;
   */
  AT_PARAMETER = 0,
  /**
   * @generated from protobuf enum value: AT_BUFFER = 1;
   */
  AT_BUFFER = 1,
}
// @generated message type with reflection information, may provide speed optimized methods
class Tensor$Type extends MessageType<Tensor> {
  constructor() {
    super("tensors.Tensor", [
      { no: 1, name: "dtype", kind: "enum", T: () => ["tensors.Dtype", Dtype] },
      {
        no: 2,
        name: "shape",
        kind: "scalar",
        repeat: 1 /*RepeatType.PACKED*/,
        T: 3 /*ScalarType.INT64*/,
        L: 0 /*LongType.BIGINT*/,
      },
      { no: 3, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
      {
        no: 4,
        name: "attr_type",
        kind: "enum",
        opt: true,
        T: () => ["tensors.AttributeType", AttributeType],
      },
    ]);
  }
  create(value?: PartialMessage<Tensor>): Tensor {
    const message = { dtype: 0, shape: [], data: new Uint8Array(0) };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<Tensor>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: Tensor
  ): Tensor {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* tensors.Dtype dtype */ 1:
          message.dtype = reader.int32();
          break;
        case /* repeated int64 shape */ 2:
          if (wireType === WireType.LengthDelimited)
            for (let e = reader.int32() + reader.pos; reader.pos < e; )
              message.shape.push(reader.int64().toBigInt());
          else message.shape.push(reader.int64().toBigInt());
          break;
        case /* bytes data */ 3:
          message.data = reader.bytes();
          break;
        case /* optional tensors.AttributeType attr_type */ 4:
          message.attrType = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: Tensor,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* tensors.Dtype dtype = 1; */
    if (message.dtype !== 0)
      writer.tag(1, WireType.Varint).int32(message.dtype);
    /* repeated int64 shape = 2; */
    if (message.shape.length) {
      writer.tag(2, WireType.LengthDelimited).fork();
      for (let i = 0; i < message.shape.length; i++)
        writer.int64(message.shape[i]);
      writer.join();
    }
    /* bytes data = 3; */
    if (message.data.length)
      writer.tag(3, WireType.LengthDelimited).bytes(message.data);
    /* optional tensors.AttributeType attr_type = 4; */
    if (message.attrType !== undefined)
      writer.tag(4, WireType.Varint).int32(message.attrType);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message tensors.Tensor
 */
export const Tensor = new Tensor$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Attribute$Type extends MessageType<Attribute> {
  constructor() {
    super("tensors.Attribute", [
      { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 3,
        name: "module",
        kind: "message",
        oneof: "value",
        T: () => Module,
      },
      {
        no: 4,
        name: "tensor",
        kind: "message",
        oneof: "value",
        T: () => Tensor,
      },
      {
        no: 5,
        name: "string",
        kind: "scalar",
        oneof: "value",
        T: 9 /*ScalarType.STRING*/,
      },
      {
        no: 6,
        name: "int64",
        kind: "scalar",
        oneof: "value",
        T: 3 /*ScalarType.INT64*/,
        L: 0 /*LongType.BIGINT*/,
      },
      {
        no: 7,
        name: "float",
        kind: "scalar",
        oneof: "value",
        T: 2 /*ScalarType.FLOAT*/,
      },
      {
        no: 8,
        name: "bool",
        kind: "scalar",
        oneof: "value",
        T: 8 /*ScalarType.BOOL*/,
      },
    ]);
  }
  create(value?: PartialMessage<Attribute>): Attribute {
    const message = { name: "", value: { oneofKind: undefined } };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<Attribute>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: Attribute
  ): Attribute {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string name */ 1:
          message.name = reader.string();
          break;
        case /* tensors.Module module */ 3:
          message.value = {
            oneofKind: "module",
            module: Module.internalBinaryRead(
              reader,
              reader.uint32(),
              options,
              (message.value as any).module
            ),
          };
          break;
        case /* tensors.Tensor tensor */ 4:
          message.value = {
            oneofKind: "tensor",
            tensor: Tensor.internalBinaryRead(
              reader,
              reader.uint32(),
              options,
              (message.value as any).tensor
            ),
          };
          break;
        case /* string string */ 5:
          message.value = {
            oneofKind: "string",
            string: reader.string(),
          };
          break;
        case /* int64 int64 */ 6:
          message.value = {
            oneofKind: "int64",
            int64: reader.int64().toBigInt(),
          };
          break;
        case /* float float */ 7:
          message.value = {
            oneofKind: "float",
            float: reader.float(),
          };
          break;
        case /* bool bool */ 8:
          message.value = {
            oneofKind: "bool",
            bool: reader.bool(),
          };
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: Attribute,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string name = 1; */
    if (message.name !== "")
      writer.tag(1, WireType.LengthDelimited).string(message.name);
    /* tensors.Module module = 3; */
    if (message.value.oneofKind === "module")
      Module.internalBinaryWrite(
        message.value.module,
        writer.tag(3, WireType.LengthDelimited).fork(),
        options
      ).join();
    /* tensors.Tensor tensor = 4; */
    if (message.value.oneofKind === "tensor")
      Tensor.internalBinaryWrite(
        message.value.tensor,
        writer.tag(4, WireType.LengthDelimited).fork(),
        options
      ).join();
    /* string string = 5; */
    if (message.value.oneofKind === "string")
      writer.tag(5, WireType.LengthDelimited).string(message.value.string);
    /* int64 int64 = 6; */
    if (message.value.oneofKind === "int64")
      writer.tag(6, WireType.Varint).int64(message.value.int64);
    /* float float = 7; */
    if (message.value.oneofKind === "float")
      writer.tag(7, WireType.Bit32).float(message.value.float);
    /* bool bool = 8; */
    if (message.value.oneofKind === "bool")
      writer.tag(8, WireType.Varint).bool(message.value.bool);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message tensors.Attribute
 */
export const Attribute = new Attribute$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Module$Type extends MessageType<Module> {
  constructor() {
    super("tensors.Module", [
      { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
      {
        no: 2,
        name: "names",
        kind: "scalar",
        repeat: 2 /*RepeatType.UNPACKED*/,
        T: 9 /*ScalarType.STRING*/,
      },
      {
        no: 3,
        name: "attributes",
        kind: "message",
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => Attribute,
      },
    ]);
  }
  create(value?: PartialMessage<Module>): Module {
    const message = { name: "", names: [], attributes: [] };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<Module>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: Module
  ): Module {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* string name */ 1:
          message.name = reader.string();
          break;
        case /* repeated string names */ 2:
          message.names.push(reader.string());
          break;
        case /* repeated tensors.Attribute attributes */ 3:
          message.attributes.push(
            Attribute.internalBinaryRead(reader, reader.uint32(), options)
          );
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: Module,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string name = 1; */
    if (message.name !== "")
      writer.tag(1, WireType.LengthDelimited).string(message.name);
    /* repeated string names = 2; */
    for (let i = 0; i < message.names.length; i++)
      writer.tag(2, WireType.LengthDelimited).string(message.names[i]);
    /* repeated tensors.Attribute attributes = 3; */
    for (let i = 0; i < message.attributes.length; i++)
      Attribute.internalBinaryWrite(
        message.attributes[i],
        writer.tag(3, WireType.LengthDelimited).fork(),
        options
      ).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message tensors.Module
 */
export const Module = new Module$Type();
