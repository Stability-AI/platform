import { Code } from "~/Code";
import { GlobalState } from "~/GlobalState";

export type Active = Code.Language;
export namespace Active {
  export const use = () =>
    store(
      ({ active, setActive }) => [active, setActive] as const,
      GlobalState.shallow
    );

  const store = GlobalState.create<{
    active: Active;
    setActive: (language: Active) => void;
  }>((set) => ({
    active: "TypeScript" satisfies Active,
    setActive: (language: Active) => set({ active: language }),
  }));
}
