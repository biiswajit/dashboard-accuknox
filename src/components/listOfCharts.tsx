import { ChartLayout } from "./chartLayout";
import { PieChartContainer } from "./pieChartContainer";
import { cspm } from "../data/cspm";

export function ListOfCharts() {
  return (<div className="h-[320px] py-2 px-5 flex flex-nowrap overflow-x-auto">
  {
    cspm.map((value) => <ChartLayout><PieChartContainer payload={value}/></ChartLayout>)
  }
  <ChartLayout>
    <div className="w-[500px] h-[220px] grid place-items-center">
      <button className="border-2 px-3 py-1 rounded-md text-gray-600">+ Add weight</button>
    </div>
  </ChartLayout>
  </div>);
}