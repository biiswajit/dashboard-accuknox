import { atom } from "jotai";
import { cspmType } from "../types";

export const modalVisibilityAtom = atom<boolean>(false);
export const chartVisibilityAtom = atom<boolean>(false);
export const chartDetailAtom = atom<cspmType | null>(null);