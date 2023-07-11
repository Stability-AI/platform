import { Code } from "~/Code";

export { Samples } from "./Samples";

export type Sample = {
  name?: string;
  environment?: Code.Environment;
  language?: Code.Language;
  code: Code;
};

export namespace Sample {
  export type Options = Omit<Sample, "code">;

  export type Values = Value[];
  export type Value = ((helpers: Helpers) => Code) | ValueLiteral;
  export type ValueLiteral = string | number | boolean;

  export const create = (
    strings: TemplateStringsArray,
    options: Options,
    ...values: Values
  ): Sample => {
    const helpers = Helpers.create();
    const sample: Omit<Sample, "code"> = options;

    const code = values.reduce<string>((code, valueOrFunction, index) => {
      const value =
        typeof valueOrFunction === "function"
          ? valueOrFunction(helpers)
          : valueOrFunction;

      return `${code}${strings[index]}${value}`;
    }, "");

    const codeWithLastString = `${code}${strings[strings.length - 1]}`;
    const codeWithRemovals = codeWithLastString.replace(
      new RegExp(`\\s*${helpers.markForRemoval}\\n*`, "g"),
      "\n"
    );

    const codeWithoutLeadingNewlines = codeWithRemovals.replace(/^\n*/, "");
    const codeWithTrailingNewlines = codeWithoutLeadingNewlines.replace(
      /\n*$/,
      "\n"
    );

    return { ...sample, code: codeWithTrailingNewlines };
  };

  export type Helpers = ReturnType<typeof Helpers.create>;
  export namespace Helpers {
    export const create = () => {
      const markForRemoval = ID.create();

      return {
        apiKey: "API_KEY",
        markForRemoval,

        ifDefined: (
          strings: TemplateStringsArray,
          valueLiteral?: ValueLiteral
        ): Code =>
          valueLiteral
            ? `${strings[0]}${valueLiteral}${strings[1]}`
            : markForRemoval,
      };
    };
  }
}
