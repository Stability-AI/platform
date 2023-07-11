import { Code } from "~/Code";

export function Button({
  language,
  active,
  onClick,
}: {
  language: Code.Language;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={classes(
        "flex items-center justify-center rounded border border-transparent px-1.5 text-xs text-white duration-100",
        active ? "bg-white text-black" : "hover:border-zinc-400"
      )}
    >
      {language}
    </button>
  );
}
