import { useEffect, useState } from "react";
import { useDebounce } from "../utils";
import { useAtom } from "jotai";
import { cspmAtom, chartVisibilityAtom, chartDetailAtom } from "../store";
import { cspmType } from "../types";
import { ChartShowModal } from "./modal";

export function SearchBox() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const [cspm,] = useAtom(cspmAtom);
  const [modal, setModal] = useAtom(chartVisibilityAtom);
  const [, setDetail] = useAtom(chartDetailAtom);
  const [searchRes, setSearchRes] = useState<cspmType[] | null>(null);
  const [active, setActive] = useState<boolean>(false);

  function handleSearch(term: string) {
    if (term === "") return null;
    term = term.trim()
    const terms = term.split(" ");
    const searchedCspm = cspm.filter((payload) => {
      return terms.some(term => payload.heading.toLowerCase().includes(term));
    });
    return searchedCspm;
  }

  useEffect(() => {
    setSearchRes(handleSearch(debouncedSearchTerm));
  }, [debouncedSearchTerm])


  return (
  <>
    <input
    onFocus={() => setActive(true)}
    onBlur={() => setTimeout(() => setActive(false), 1000)}
    onChange={(e) => {
      setSearchTerm(e.target.value);
    }}
    className="pl-4 h-10 w-96 rounded-md"
    type="text"
    placeholder="search anything..." />
    {searchRes && active &&
    <div className="shadow-md bg-white border-2 border-gray-200 absolute right-[205px] top-14 w-96 overflow-y-auto">
      {searchRes.map((value, idx) => (
      <p
      key={idx}
      onClick={() => {
        setDetail(value);
        setModal(true);
      }}
      className="my-4 px-4 border-2 hover:cursor-pointer">{value.heading}</p>))}
    </div>}
  </>
  )
}