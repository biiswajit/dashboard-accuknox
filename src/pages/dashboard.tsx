import { CatagoryLayout, ListOfCharts, Modal, NavBar, ChartShowModal } from "../components";
import { modalVisibilityAtom, chartDetailAtom, chartVisibilityAtom } from "../store";
import { useAtom } from "jotai";


export function Dashboard() {
  const [modal, ] = useAtom(modalVisibilityAtom);
  const [details,] = useAtom(chartDetailAtom);
  const [visible,] = useAtom(chartVisibilityAtom);

  return <div className="w-screen h-screen">
  <NavBar />
  {modal && <Modal />}
  {visible && details && <ChartShowModal payload={details} />}
  <CatagoryLayout catagoryName="CSPM Executive Dashboard">
    <ListOfCharts />
  </CatagoryLayout>
  </div>
}