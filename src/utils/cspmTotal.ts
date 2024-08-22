import { payloadType } from "../types";

export function findCspmTotal(payload: payloadType[]) {
  let sum = 0;
  payload.map((value) => {
    sum += value.data
  })
  return sum;
}