import { Active } from "./Active";
import { Button } from "./Button";

export type Language = "TypeScript" | "JavaScript" | "Python";

export declare namespace Language {
  export { Active, Button };
}

export namespace Language {
  Language.Active = Active;
  Language.Button = Button;
}
