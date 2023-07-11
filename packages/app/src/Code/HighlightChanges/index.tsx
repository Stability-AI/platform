import { Code } from "~/Code";

export namespace HighlightChanges {
  export const use = (code: Code, language?: Code.Language) => {
    const fadeInSpeed = 150;
    const fadeOutSpeed = 750;
    const fadeOutDelay = 1000;

    const ref = useRef<HTMLDivElement>(null);
    const previousContents = useRef<string[]>([]);
    const timeouts = useRef<NodeJS.Timeout[]>([]);

    useEffect(() => () => timeouts.current.forEach(clearTimeout), []);
    useEffect(() => {
      previousContents.current = [];

      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    }, [language]);

    useEffect(() => {
      if (!ref.current) return;

      const spans = [...ref.current.querySelectorAll<HTMLSpanElement>("span")];
      const currentContents = spans.map((span) => span.textContent ?? "");

      let editsAllowed =
        currentContents.length !== previousContents.current.length
          ? currentContents.length - previousContents.current.length
          : currentContents.length;

      editsAllowed <= 0 &&
        spans.forEach((span) => span.classList.add("quit-animating"));

      for (let index = 0; index < currentContents.length; index++) {
        if (editsAllowed <= 0) break;

        const previousContent = previousContents.current[index] ?? "";

        if (
          currentContents[index] === previousContent ||
          previousContent === ""
        )
          continue;

        spans[index]?.classList.remove("quit-animating");
        spans[index]?.classList.add("recently-edited");
        timeouts.current[index] && clearTimeout(timeouts.current[index]);

        timeouts.current[index] = setTimeout(() => {
          spans[index]?.classList.remove("recently-edited");
        }, fadeOutDelay);

        editsAllowed--;
      }

      previousContents.current = currentContents;
    }, [code]);

    return {
      ref,
      css: css`
        & span {
          position: relative;
          overflow: visible;

          &:before {
            content: "";
            position: absolute;
            top: -0.25em;
            left: -0.35em;
            bottom: -0.25em;
            right: -0.35em;

            opacity: 0;
            border: 0.1em solid rgb(99, 102, 241);
            border-radius: 0.25rem;
            box-shadow: inset 0 0 0.3em rgb(99, 102, 241),
              0 0 1em rgb(99, 102, 241), 0 0 5em rgb(99, 102, 241);

            transition: opacity ${fadeOutSpeed}ms ease-in;
          }

          &.recently-edited:before {
            opacity: 1;
            transition: opacity ${fadeInSpeed}ms ease-out;
          }

          &.quit-animating:before {
            transition: none;
          }
        }
      `,
    };
  };
}
