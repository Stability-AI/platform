import { useWindowSize } from "react-use";

import { Code } from "~/Code";
import { Theme } from "~/Theme";

import { List } from "./List";

export function Sandbox({
  samples,
  children,
}: React.PropsWithChildren & {
  samples: Code.Samples;
}) {
  const size = useWindowSize();
  const [showCode, setShowCode] = useState(true);
  return (
    <div className="flex h-full max-h-full min-h-0 grow flex-col gap-6 p-5 pt-0">
      <div className="flex min-h-0 grow gap-6">
        {size.width > 1024 &&
          (showCode ? (
            <Code.Samples
              samples={samples}
              onClose={() => setShowCode(false)}
            />
          ) : (
            <div
              className="flex w-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-zinc-400 text-center text-xs transition-colors duration-100 hover:bg-zinc-100"
              onClick={() => setShowCode(true)}
            >
              <Theme.Icon.Code />
              View Code
            </div>
          ))}
        {children}
      </div>
    </div>
  );
}

Sandbox.List = List;
