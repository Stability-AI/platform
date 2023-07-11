import { Code } from "~/Code";
import { Theme } from "~/Theme";

export type Samples = Code.Sample[];

export function Samples({
  samples,
  onClose,
}: {
  samples: Samples;
  onClose: () => void;
}) {
  const [activeLanguage, setActiveLanguage] = Code.Language.Active.use();
  const [sampleIndex, setSampleIndex] = useState(
    () => samples.findIndex(({ language }) => language === activeLanguage) ?? 0
  );

  const sample = samples[sampleIndex];
  return (
    <div className="flex w-full max-w-[50rem] shrink flex-col overflow-hidden overflow-x-auto rounded-xl">
      <div className="flex w-full gap-1 border-b border-[#424242] bg-[#2b2b2b] p-2">
        {useMemo(
          () =>
            samples.map(
              ({ language }, index) =>
                language && (
                  <Code.Language.Button
                    key={index}
                    language={language}
                    active={language === activeLanguage}
                    onClick={() => {
                      setActiveLanguage(language);
                      setSampleIndex(index);
                    }}
                  />
                )
            ),
          [samples, activeLanguage, setActiveLanguage]
        )}
        <button
          className="ml-auto rounded border border-transparent p-1 text-xs text-white duration-100 hover:bg-white hover:text-black"
          onClick={() =>
            sample?.code && navigator.clipboard.writeText(sample.code)
          }
        >
          <Theme.Icon.Copy className="h-4 w-4" />
        </button>
        <button
          onClick={onClose}
          className="aspect-square rounded border border-transparent p-1 px-1.5 text-xs text-white duration-100 hover:bg-white hover:text-black"
        >
          <Theme.Icon.X className="h-3 w-3" />
        </button>
      </div>
      <div className="h-full overflow-auto">
        <Code language={sample?.language}>{sample?.code ?? ""}</Code>
      </div>
    </div>
  );
}

export namespace Samples {
  export const create = (
    strings: TemplateStringsArray,
    ...values: (Code.Sample.Options | Code.Sample.Value)[]
  ): Samples => {
    type UnprocessedSample = Code.Sample.Options & {
      strings: string[];
      values: Code.Sample.Values;
    };

    const unprocessedSamples = values.reduce<UnprocessedSample[]>(
      (unprocessedSamples, optionsOrValue, index) => {
        const previous = unprocessedSamples[unprocessedSamples.length - 1];
        const unprocessedSample = previous ?? { strings: [], values: [] };

        const string = strings[index];
        string && unprocessedSample.strings.push(string);

        typeof optionsOrValue !== "object"
          ? unprocessedSample.values.push(optionsOrValue)
          : unprocessedSamples.push({
              ...optionsOrValue,
              strings: [],
              values: [],
            });

        return unprocessedSamples;
      },
      []
    );

    const lastString = strings[strings.length - 1];
    lastString &&
      unprocessedSamples[unprocessedSamples.length - 1]?.strings.push(
        lastString
      );

    return unprocessedSamples.map(({ strings, values, ...options }) =>
      Code.Sample.create(
        Object.assign([], strings, { raw: strings }),
        options,
        ...values
      )
    );
  };
}
