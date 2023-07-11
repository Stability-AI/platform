import { Code } from "~/Code";

import { TextToImage } from "./";

export namespace Samples {
  export const use = (input: TextToImage.Input) => Code.Samples.create`

${{ language: "TypeScript", environment: "Browser" }}

import { OpenAPI } from "@stability/sdk";

export const textToImage = async () => {
  const path: OpenAPI.TextToImageRequestPath =
    "https://api.stability.ai/v1/generation/${input.engineID}/text-to-image";

  const headers: OpenAPI.TextToImageRequestHeaders = {
    Accept: "image/png",
    Authorization: "Bearer ${({ apiKey }) => apiKey}"
  };

  const body: OpenAPI.TextToImageRequestBody = {
    ${({ ifDefined }) => ifDefined`width: ${input.width},`}
    ${({ ifDefined }) => ifDefined`height: ${input.height},`}
    ${({ ifDefined }) => ifDefined`seed: ${input.seed},`}
    ${({ ifDefined }) => ifDefined`steps: ${input.steps},`}
    ${({ ifDefined }) => ifDefined`cfg_scale: ${input.cfgScale},`}
    ${({ ifDefined }) => ifDefined`style_preset: "${input.style}",`}
    text_prompts: [
      {
        text: "${input.positivePrompt}",
        weight: 1,
      },
      {
        text: "${input.negativePrompt}",
        weight: -1,
      },
    ],
  };

  return fetch(path, {
    headers,
    method: "POST",
    body: JSON.stringify(body),
  });
};

${{ language: "JavaScript", environment: "Browser" }}

export const textToImage = async () => {
  const path =
    "https://api.stability.ai/v1/generation/${input.engineID}/text-to-image";

  const headers = {
    Accept: "image/png",
    Authorization: "Bearer ${({ apiKey }) => apiKey}"
  };

  const body = {
    ${({ ifDefined }) => ifDefined`width: ${input.width},`}
    ${({ ifDefined }) => ifDefined`height: ${input.height},`}
    ${({ ifDefined }) => ifDefined`seed: ${input.seed},`}
    ${({ ifDefined }) => ifDefined`steps: ${input.steps},`}
    ${({ ifDefined }) => ifDefined`cfg_scale: ${input.cfgScale},`}
    ${({ ifDefined }) => ifDefined`style_preset: "${input.style}",`}
    text_prompts: [
      {
        text: "${input.positivePrompt}",
        weight: 1,
      },
      {
        text: "${input.negativePrompt}",
        weight: -1,
      },
    ],
  };

  return fetch(path, {
    headers,
    method: "POST",
    body: JSON.stringify(body),
  });
};

${{ language: "Python" }}

import requests

url = "https://api.stability.ai/v1/generation/${input.engineID}/text-to-image"

headers = {
  "Accept": "image/png",
  "Content-Type": "application/json",
  "Authorization": "Bearer ${({ apiKey }) => apiKey}",
}

body = {
  ${({ ifDefined }) => ifDefined`"width": ${input.width},`}
  ${({ ifDefined }) => ifDefined`"height": ${input.height},`}
  ${({ ifDefined }) => ifDefined`"seed": ${input.seed},`}
  ${({ ifDefined }) => ifDefined`"steps": ${input.steps},`}
  ${({ ifDefined }) => ifDefined`"cfg_scale": ${input.cfgScale},`}
  ${({ ifDefined }) => ifDefined`"style_preset": "${input.style}",`}
  "text_prompts": [
    {
      "text": "${input.positivePrompt}",
      "weight": 1,
    },
    {
      "text": "${input.negativePrompt}",
      "weight": -1,
    },
  ],
}

response = requests.post(
  url,
  headers=headers,
  json=body,
)

with open("image.png", "wb") as file:
  file.write(response.content)

`;
}
