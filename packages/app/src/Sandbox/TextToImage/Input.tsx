import { TextToImage } from "../TextToImage";

export type Input = {
  engineID: ID;

  width?: number;
  height?: number;
  seed?: number;
  steps?: number;
  cfgScale?: number;
  style?: TextToImage.Style;

  positivePrompt: string;
  negativePrompt: string;
};

export namespace Input {
  export const preset = () =>
    ({
      engineID: "stable-diffusion-xl-beta-v2-2-2",

      width: 512,
      height: 512,

      steps: 50,
      cfgScale: 7,

      positivePrompt: "A photo of a dog",
      negativePrompt: "A photo of a cat",
    } satisfies Input);
}
