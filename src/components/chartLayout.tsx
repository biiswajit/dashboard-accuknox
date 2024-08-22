import { PieChartContainer } from "./pieChartContainer";
import { cspmType } from "../types";

export function ChartLayout(
{ payload, totalCount }: { payload: cspmType[], totalCount: number}
) {

  return <div className="border-2 border-gray-200 rounded-md h-[90%] m-3 shadow-md bg-white hover:bg-gray-100">
    <PieChartContainer payload={payload} totalCount={totalCount}/>
  </div>
}