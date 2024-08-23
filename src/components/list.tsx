import { useAtom } from "jotai";
import { cspmAtom, modalVisibilityAtom } from "../store";
import { useState } from "react";

export function ListOfCspmCharts() {
  const [cspm, setCspm] = useAtom(cspmAtom);
  const [, setModal] = useAtom(modalVisibilityAtom);
  const [selectedWeights, setSelectedWeights] = useState<number[]>([]);


  return (
  <div className="border-2 border-gray-200 p-4 my-b-4">
    <p className="font-bold">CSPM Exevutive Dashboard</p>
    {
      cspm.map((value, idx) => {
        return (
        <label className="flex gap-2 pl-4 my-2">
          <input
          onClick={() => {
            if (selectedWeights.includes(idx)) {
              selectedWeights.splice(selectedWeights.indexOf(idx), 1);
            } else {
              selectedWeights.push(idx);
            }
            setSelectedWeights(selectedWeights);
          }}
          key={idx}
          type="checkbox"
          value={value.heading}/>
        {`${value.heading}`}
        </label>)
      })
    }
    <button
    onClick={() => {
      const newCspm = cspm.filter((_, index) => !selectedWeights.includes(index));
      setCspm(newCspm);
          setModal(false);
    }}
    className="border-2 border-gray-50 px-4 py-2 bg-[#1E2A5E] text-white rounded-md"
    >Remove Weights</button>
  </div>
  )
}