import { atom } from "recoil";

export const sampleState = atom<number>({
  key: "sampleState",
  default: 0,
});
