/* eslint-disable */

import { css as cssImport } from "@emotion/react";
import { cx } from "@emotion/css";
import ReactImport from "react";
import { twMerge } from "tailwind-merge";

declare global {
  type ID = string;
  type IDs = ID[];

  type URLString = string;

  type CSSValue = string;

  type Styleable = { className?: string };
  type StyleableWithChildren<T = {}> = Styleable & React.PropsWithChildren<T>;

  var React: typeof ReactImport;
  var useState: typeof ReactImport.useState;
  var useMemo: typeof ReactImport.useMemo;
  var useCallback: typeof ReactImport.useCallback;
  var useEffect: typeof ReactImport.useEffect;
  var useRef: typeof ReactImport.useRef;
  var useReducer: typeof ReactImport.useReducer;
  var useContext: typeof ReactImport.useContext;
  var useLayoutEffect: typeof ReactImport.useLayoutEffect;
  var useDebugValue: typeof ReactImport.useDebugValue;

  var ID: typeof IDNamespace;

  var keys: (...keys: (string | number | undefined)[]) => string;
  var css: typeof cssImport;
  var classes: typeof cx;

  var spy: <A>(a: A) => A;
  var spyJSON: <A>(a: A) => A;
  var doNothing: (...args: unknown[]) => void;
}

globalThis.React = ReactImport;
globalThis.useState = ReactImport.useState;
globalThis.useMemo = ReactImport.useMemo;
globalThis.useCallback = ReactImport.useCallback;
globalThis.useEffect = ReactImport.useEffect;
globalThis.useRef = ReactImport.useRef;
globalThis.useReducer = ReactImport.useReducer;
globalThis.useContext = ReactImport.useContext;
globalThis.useLayoutEffect = ReactImport.useLayoutEffect;
globalThis.useDebugValue = ReactImport.useDebugValue;

namespace IDNamespace {
  export const create = (): ID =>
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;

      return v.toString(16);
    });
}

globalThis.ID = IDNamespace;

globalThis.keys = function (...keys) {
  return keys.map((key) => `${key}`).join(".");
};

globalThis.css = cssImport;
globalThis.classes = function (...classes) {
  return twMerge(cx(...classes));
};

globalThis.spy = function (a) {
  console.log(a);
  return a;
};

globalThis.spyJSON = function (a) {
  console.log(JSON.stringify(a, null, 2));
  return a;
};

globalThis.doNothing = () => {};
