import { Button, Code as CodeIcon } from "~/Theme";
import { User } from "~/User";

import { Code, Languages } from "./Code";
import { useWindowSize } from "react-use";

export function Sandbox({
  SandboxComponent,
  samples
}: {
  SandboxComponent: React.FC<{
    setOptions: (options: any) => void;
  }>;
  samples: Record<Languages, string>;
}) {
  const apiKey = User.APIKey.use();

  const [showCode, setShowCode] = useState(true);
  const [codeLanguage, setCodeLanguage] = useState<Languages>("typescript");
  const [options, setOptions] = useState<any>({});

  const code = useMemo(() => {
    const code = samples[codeLanguage]
      .trim()
      .replace("{apiKey}", "YOUR API KEY");

    // replace {VALUE} with the value from the options object
    return Object.entries(options).reduce((acc, [key, value]) => {
      return acc.replace(`{${key}}`, `${value}`);
    }, code);
  }, [codeLanguage, apiKey, options]);

  const size = useWindowSize();

  return (
    <div className="flex h-full max-h-full min-h-0 grow flex-col gap-6 p-5 pt-0">
      <div className="flex min-h-0 grow gap-6">
        {size.width > 1024 &&
          (showCode ? (
            <Code
              content={code}
              language={codeLanguage}
              setLanguage={setCodeLanguage}
              onClose={() => setShowCode(false)}
            />
          ) : (
            <div
              className="flex w-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-zinc-400 text-center text-xs transition-colors duration-100 hover:bg-zinc-100"
              onClick={() => setShowCode(true)}
            >
              <CodeIcon />
              View Code
            </div>
          ))}
        <SandboxComponent setOptions={setOptions} />
      </div>
    </div>
  );
}
