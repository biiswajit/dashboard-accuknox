import { modalVisibilityAtom, chartVisibilityAtom } from "../store";
import { useAtom } from "jotai";
import { AddWeightForm, RemoveWeightForm } from "./form";
import { useState } from "react";
import { PieChartContainer } from "./pieChartContainer";
import { cspmType } from "../types";

export function Modal() {
  const [, setModal] = useAtom(modalVisibilityAtom);
  const [section, setSection] = useState<string>("add weight");

  return (
  <div
  className="grid place-content-center z-10 absolute top-0 h-screen w-screen backdrop-blur-md">
    <div
    className="flex flex-col gap-4 w-screen h-[700px] md:w-[700px] bg-white border-2 border-gray-200 shadow-md rounded-md p-2">
      <div className="bg-[#1E2A5E] h-[60px] w-full text-white font-semibold text-2xl px-10 flex place-items-center rounded-md">
      Add widget
      </div>
      <section className="flex justify-stretch gap-5">
        <div
        onClick={() => setSection("add weight")}
        className={`hover:cursor-pointer w-full text-center ${section === "add weight" ? "border-b-4 border-black" : "border-none"}`}>Add weights</div>
        <div
        onClick={() => setSection("remove weight")}
        className={`hover:cursor-pointer w-full text-center ${section === "remove weight" ? "border-b-4 border-black" : "border-none"}`}>Remove weights</div>
      </section>
      {section === "add weight" && <AddWeightForm />}
      {section === "remove weight" && <RemoveWeightForm />}
      <button
      className="shadow-md border-2 border-gray-200 bg-red-600 py-2 text-white rounded-md"
      onClick={() => setModal(false)}>Close</button>
    </div>
  </div>);
}


export function ChartShowModal(
{payload}: {payload: cspmType}) {
  const [, setModal] = useAtom(chartVisibilityAtom);
  return (
  <div
  className="grid place-content-center z-10 absolute top-0 h-screen w-screen backdrop-blur-lg">
    <div
    className="bg-white p-20 shadow-lg rounded-md">
      <PieChartContainer payload={payload} />
    </div>
    <button
    className="bg-red-600 h-10 rounded-md my-5"
    onClick={() => setModal(false)}>Close</button>
  </div>);
}