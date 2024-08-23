import { modalVisibilityAtom } from "../store";
import { useAtom } from "jotai";
import { SearchBox } from "./search";

export function NavBar() {
  const [, setModal] = useAtom(modalVisibilityAtom);

  return (
  <div
  className="w-screen h-16 bg-[#1E2A5E] flex justify-end gap-4 place-items-center md:px-10">
  <SearchBox />
    <button
    className="p-2 text-white border-2 border-white rounded-md"
    onClick={() => setModal(true)}>Customize weight</button>
  </div>
  );
}