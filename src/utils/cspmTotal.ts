import { cspmType } from "../types";

export function findCspmTotal(payload: cspmType[]) {
  let sum = 0;
  payload.map((value) => {
    sum += value.data
  })
  return sum;
}