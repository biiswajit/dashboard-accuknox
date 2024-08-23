import { atom } from "jotai";
import { cspmData } from "../data";
import { cspmType } from "../types";

export const cspmAtom = atom<cspmType[]>(cspmData)