import { StoreApi, UseBoundStore, create as zustandDefault } from "zustand";
import { shallow as zustandShallow } from "zustand/shallow";

export type GlobalState<A> = UseBoundStore<StoreApi<A>>;
export namespace GlobalState {
  export type Store<State> = StoreApi<State>;

  export const create = zustandDefault;
  export const shallow = zustandShallow;
}
