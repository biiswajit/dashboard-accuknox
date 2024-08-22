import { ChartLayout } from "./chartLayout";
import { cspm } from "../data/cspm";
import { findCspmTotal } from "../utils";

export function CatagoryLayout(
{ catagoryName }: {catagoryName: string}) {

  return <div className="my-10 mx-4 p-2 bg-gray-100 rounded-md">
    <p className="px-10 text-3xl font-semibold">{ catagoryName }</p>
    <div className="h-[300px] py-2 px-5 flex flex-nowrap overflow-x-auto">
    {
      cspm.map((value) => <ChartLayout payload={value} totalCount={findCspmTotal(value)}/>)
    }
    </div>
  </div>
}