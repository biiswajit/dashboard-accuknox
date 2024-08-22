import { CustomPieChart } from "./customPieChart";
import { cspmType, payloadType } from "../types";
import { findCspmTotal } from "../utils";

export function PieChartContainer(
{ payload }: {payload: cspmType}) {

  return (<>
    <h2 className="font-bold">{payload.heading}</h2>
    <div className="flex flex-row w-[500px] h-[220px]">
      <CustomPieChart payload={payload.payload} totalCount={findCspmTotal(payload.payload)} />
      <TextBox payload={payload.payload} />
    </div>
  </>);
}


export function TextBox(
{ payload}: {payload: payloadType[]}) {

  return (<div className="flex flex-col place-content-center w-[50%] gap-2 pl-8">
    {payload.map((value) => (
      <div className="flex flex-row gap-2 h-6">
        <div style={{ backgroundColor: value.color }} className={`w-6 border-2 border-gray-50 rounded-md`} />
        <div className="">{value.name}</div>
      </div>
    ))}
  </div>);
}