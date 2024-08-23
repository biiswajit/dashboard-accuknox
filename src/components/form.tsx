import { cspmAtom, modalVisibilityAtom } from "../store";
import { useAtom } from "jotai";
import { useState } from "react";
import { payloadType } from "../types";
import { ListOfCspmCharts } from "./list";

export function AddWeightForm() {
  const [payload, setPayload] = useState<payloadType[]>([{ name: "", data: 0, color: "" }]);
  const [cspm, setCspm] = useAtom(cspmAtom);
  const [, setModal] = useAtom(modalVisibilityAtom);
  const [catagory, setCatagory] = useState<string>("cspm");
  const [heading, setHeading] = useState<string>("");

  return (
  <form
  onSubmit={(e) => {
    e.preventDefault();
  }}
  className="w-full h-[500px] flex flex-col gap-5 border-2 border-gray-200 overflow-y-auto rounded-md p-4">
    <label>
    Select a catagory:<br />
      <select
      onChange={(e) => {
        setCatagory(e.target.value);
      }}
      name="catagory-name"
      className="w-[180px] h-[32px] m-4 border-2 border-gray-200 bg-gray-50">
        <option value="cspm">CSPM</option>
        <option value="image">Images</option>
      </select>
    </label>
    <label>
      Payload heading:<br/>
      <input
      placeholder="Heading of payload"
      className="px-2 m-4 w-[180px] h-[32px] border-2 border-gray-200 bg-gray-50"
      onChange={(e) => setHeading(e.target.value)}/>
    </label>
    <label>
    Payload:
      {payload.map((value, idx) => (
      <div
      key={idx}
      className="flex flex-wrap justify-between gap-2 m-2 p-2">
        <input
        className="px-2 w-[180px] h-[32px] border-2 border-gray-200 bg-gray-50"
        type="text"
        name="paylaod-name"
        value={value.name}
        placeholder="Payload name"
        onChange={(e) => {
          const newPayload = [...payload];
          newPayload[idx].name = e.target.value;
          setPayload(newPayload);
        }}/>
        <input
        className="px-2 w-[180px] h-[32px] border-2 border-gray-200 bg-gray-50"
        type="number"
        name="paylaod-data"
        value={value.data}
        placeholder="Payload value"
        onChange={(e) => {
          const newPayload = [...payload];
          newPayload[idx].data = parseInt(e.target.value);
          setPayload(newPayload);
        }}/>
        <input
        className="px-2 w-[180px] h-[32px] border-2 border-gray-200 bg-gray-50"
        type="text"
        name="paylaod-color"
        value={value.color}
        placeholder="Payload color hax code"
        onChange={(e) => {
          const newPayload = [...payload];
          newPayload[idx].color = e.target.value;
          setPayload(newPayload);
        }}/>
      </div>
      ))}
    </label>
    <div className="flex justify-center">
      <button
      className="border-2 border-gray-50 px-4 py-2 bg-[#1E2A5E] text-white rounded-md"
      onClick={() => {
        const newPayload = [...payload];
        newPayload.push({name: "", data: NaN, color: ""})
        setPayload(newPayload)
      }}>
      Add payload
      </button>
      <button
      className="border-2 border-gray-50 px-4 py-2 bg-[#1E2A5E] text-white rounded-md"
      onClick={() => {
        if (catagory === "cspm") {
          const newCspm = cspm;
          newCspm.push({
            heading: heading,
            payload: payload
          });
          setCspm(newCspm);
        }
        else if (catagory === "image") {
          console.log("Image");
        }
        setModal(false);
      }}>
      Add widget
      </button>
    </div>
  </form>
  )
}


export function RemoveWeightForm() {

  return (
  <div className="h-[500px] w-full border-2 border-gray-200 p-4 rounded-md overflow-y-auto">
    <ListOfCspmCharts />
  </div>
  )
}