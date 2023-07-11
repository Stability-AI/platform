import { Sandbox as GenericSandbox } from "~/Sandbox";
import { Theme } from "~/Theme";
import { User } from "~/User";

import { TextToImage } from "../";
import { request } from "../OpenAPI";

export function Sandbox() {
  const apiKey = User.AccessToken.use();

  const [input, setInput] = useState<TextToImage.Input>(
    TextToImage.Input.preset
  );

  const [imageURL, setImageURL] = useState<string | undefined>(undefined);
  const [generating, setGenerating] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const generate = doNothing;

  setGenerating;
  setError;
  request;

  // const generate = useCallback(async () => {
  //   if (!apiKey) return;

  //   setGenerating(true);
  //   setError(undefined);

  //   const [url, error] = await request(
  //     apiKey,
  //     engineID,
  //     positivePrompt,
  //     negativePrompt,
  //     style,
  //     height,
  //     width,
  //     cfgScale,
  //     seed,
  //     steps
  //   );

  //   setGenerating(false);
  //   if (error) {
  //     setError(error.message);
  //     setImageURL(undefined);
  //   } else {
  //     setImageURL(url);
  //   }
  // }, [
  //   apiKey,
  //   engineID,
  //   style,
  //   positivePrompt,
  //   negativePrompt,
  //   width,
  //   height,
  //   cfgScale,
  //   steps,
  //   seed,
  // ]);

  return (
    <GenericSandbox samples={TextToImage.Samples.use(input)}>
      <div className="flex h-full w-full flex-col gap-6 md:min-w-[55rem]">
        <Theme.Background
          title="Text-to-Image"
          className="h-full min-h-0 w-full"
          sidebar={
            <div className="flex h-fit w-full grow flex-col gap-3">
              <Theme.Textarea
                autoFocus
                color="positive"
                title="Positive Prompt"
                placeholder="Description of what you want to generate"
                value={input.positivePrompt}
                onChange={(positivePrompt) =>
                  setInput((input) => ({ ...input, positivePrompt }))
                }
              />
              <Theme.Textarea
                color="negative"
                title="Negative Prompt"
                placeholder="What you want to avoid generating"
                value={input.negativePrompt}
                onChange={(negativePrompt) =>
                  setInput((input) => ({ ...input, negativePrompt }))
                }
              />
              <Theme.Select
                title="Model"
                value={input.engineID}
                onChange={(engineID) =>
                  setInput((input) => ({ ...input, engineID }))
                }
                options={[
                  {
                    label: "Stable Diffusion XL",
                    value: "stable-diffusion-xl-beta-v2-2-2",
                  },
                  {
                    label: "Stable Diffusion 1.5",
                    value: "stable-diffusion-v1-5",
                  },
                  {
                    label: "Stable Diffusion 2.1",
                    value: "stable-diffusion-512-v2-1",
                  },
                ]}
              />
              <Theme.Select
                title="Style"
                value={input.style}
                onChange={(value) =>
                  setInput((input) => ({
                    ...input,
                    style: value as TextToImage.Style,
                  }))
                }
                options={[
                  { label: "Enhance", value: "enhance" },
                  { label: "Anime", value: "anime" },
                  { label: "Photographic", value: "photographic" },
                  { label: "Digital Art", value: "digital-art" },
                  { label: "Comic Book", value: "comic-book" },
                  { label: "Fantasy Art", value: "fantasy-art" },
                  { label: "Line Art", value: "line-art" },
                  { label: "Analog Film", value: "analog-film" },
                  { label: "Neon Punk", value: "neon-punk" },
                  { label: "Isometric", value: "isometric" },
                  { label: "Low Poly", value: "low-poly" },
                  { label: "Origami", value: "origami" },
                  { label: "Modeling Compound", value: "modeling-compound" },
                  { label: "Cinematic", value: "cinematic" },
                  { label: "3D Model", value: "3d-model" },
                  { label: "Pixel Art", value: "pixel-art" },
                  { label: "Tile Texture", value: "tile-texture" },
                ]}
              />
              <Theme.Input
                title="Steps"
                number
                value={input.steps}
                onNumberChange={(steps) =>
                  setInput((input) => ({ ...input, steps }))
                }
              />
              <Theme.Input
                number
                title="CFG Scale"
                value={input.cfgScale}
                onNumberChange={(cfgScale) =>
                  setInput((input) => ({ ...input, cfgScale }))
                }
              />
            </div>
          }
          sidebarBottom={
            <Theme.Button
              variant="primary"
              className="h-16 rounded-none"
              disabled={generating || !input.positivePrompt || !apiKey}
              onClick={generate}
            >
              Generate
            </Theme.Button>
          }
        >
          <div className=" flex h-full grow gap-3 overflow-y-auto overflow-x-hidden">
            <div className="flex grow items-center justify-center">
              {apiKey ? (
                imageURL ? (
                  <Theme.ImageContainer
                    src={imageURL}
                    title="Output Image"
                    onClear={() => setImageURL(undefined)}
                  />
                ) : (
                  <div className="flex w-full shrink-0 flex-col items-center justify-center">
                    <pre
                      className={classes(
                        error
                          ? "rounded border border-red-300 p-3 font-mono text-red-500"
                          : "text-brand-orange select-none font-sans"
                      )}
                    >
                      {generating
                        ? "Generating..."
                        : error
                        ? error
                        : "No image generated"}
                    </pre>
                  </div>
                )
              ) : (
                <div className="flex w-full shrink-0 flex-col items-center justify-center">
                  <User.Login.Button />
                </div>
              )}
            </div>
          </div>
        </Theme.Background>
        <div className="flex min-h-0 shrink-0 flex-wrap gap-6">
          <Buttons />
        </div>
      </div>
    </GenericSandbox>
  );
}

export function Buttons() {
  return (
    <>
      <Theme.Button
        link="https://stabilityai.readme.io/reference/texttoimage"
        variant="secondary"
      >
        View Documentation
      </Theme.Button>
      <Theme.Button
        link="https://github.com/Stability-AI/platform/blob/main/packages/app/src/Sandbox/TextToImage/index.tsx"
        variant="secondary"
      >
        View on GitHub
      </Theme.Button>
    </>
  );
}
