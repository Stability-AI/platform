import { Markdown } from "~/Markdown";

import { type Environment } from "./Environment";
import { HighlightChanges } from "./HighlightChanges";
import { Language } from "./Language";
import { Sample, Samples } from "./Sample";

export type Code = string;

export function Code({
  language,
  className,
  children,
}: Styleable & {
  children: Code;
  language?: Language;
}) {
  const highlighting = HighlightChanges.use(children, language);
  if (typeof children !== "string") return null;
  return (
    <div
      ref={highlighting.ref}
      css={highlighting.css}
      className={classes("h-full overflow-auto", className)}
    >
      <Markdown className="sandbox m-0 h-full rounded-t-none p-0 text-[0.95rem] leading-3 sm:p-0 md:p-0">
        {Code.toMarkdownCodeBlock(children, language)}
      </Markdown>
    </div>
  );
}

export declare namespace Code {
  export { Environment, HighlightChanges, Language, Sample, Samples };
}

export namespace Code {
  Code.HighlightChanges = HighlightChanges;
  Code.Language = Language;
  Code.Sample = Sample;
  Code.Samples = Samples;

  export const toMarkdownCodeBlock = (code: Code, language?: Language) =>
    `\`\`\`${language ?? ""}\n${code}\n\`\`\``;
}
