import { OpenAPI } from "@stability/sdk";

import { Input } from "./Input";
import { Samples } from "./Samples";
import { Sandbox } from "./Sandbox";

export declare namespace TextToImage {
  export { Input, Samples, Sandbox };
}

export namespace TextToImage {
  TextToImage.Input = Input;
  TextToImage.Samples = Samples;
  TextToImage.Sandbox = Sandbox;

  export type Style = OpenAPI.TextToImageRequestBody["style_preset"];
}
