import { CustomPieChart } from "./customPieChart";
import { cspmType } from "../types";

export function PieChartContainer(
{ payload, totalCount }: {payload: cspmType[], totalCount: number}) {

  return (<div className="flex flex-row justify-stretch w-[500px] h-full">
    <CustomPieChart payload={payload} totalCount={totalCount} />
    <TextBox payload={ payload} />
  </div>)
}

export function TextBox(
{ payload}: {payload: cspmType[]}) {

  return <div className="flex flex-col place-content-center w-[40%] gap-2">
    {payload.map((value) =>(
      <div className="flex flex-row gap-2 h-6">
        <div className={`w-6 border-2 border-gray-50 bg-[${value.color}] rounded-md`} />
        <div className="">{ value.name }</div>
      </div>
    ))}
  </div>
}