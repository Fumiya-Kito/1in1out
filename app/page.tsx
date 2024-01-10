import MonoList from "@/components/dragdrop/MonoList";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { HiOutlineBattery0 } from "react-icons/hi2";
import { HiOutlineCake } from "react-icons/hi2";


/* TODO: CategoryList Componentでマッピング */

export default function ExchangePage() {
  const DUMMY_WISH = [
    {
      id: 1,
      category_id: 0,
      icon: <HiOutlineComputerDesktop />,
      name: "WISH1",
      reason: "reason1",
    },
    {
      id: 2,
      category_id: 0,
      icon: <HiOutlineBattery0 />,
      name: "WISH2",
      reason: "reason2",
    },
    {
      id: 3,
      category_id: 0,
      icon: <HiOutlineCake />,
      name: "WISH3",
      reason: "reason3",
    },
  ];

  const DUMMY_INVENTORY = [
    {
      id: 1,
      category_id: 1,
      icon: <HiOutlineComputerDesktop />,
      name: "mono1",
      reason: "reason1",
    },
    {
      id: 2,
      category_id: 2,
      icon: <HiOutlineBattery0 />,
      name: "mono2",
      reason: "reason2",
    },
    {
      id: 3,
      category_id: 3,
      icon: <HiOutlineCake />,
      name: "mono3",
      reason: "reason3",
    },
  ];
  return (
    <>
      <h1>This is Exchange Page</h1>
      <div className="p-5 bg-pink-900">
        <h3>wishlist</h3>
        <div className="p-2 m-2 bg-sky-900">
          <MonoList data={DUMMY_WISH} />
        </div>
      </div>
      <div className="p-5 bg-green-950">
        <h3>inventory</h3>
        <div className="p-2 m-2 bg-sky-900">
          <h6>Category A</h6>
          <MonoList data={DUMMY_INVENTORY} />
        </div>
        <div className="p-2 m-2 bg-sky-900">
          <h6>Category B</h6>
          <MonoList data={DUMMY_INVENTORY} />
        </div>
        <div className="p-2 m-2 bg-sky-900">
          <h6>Category C</h6>
          <MonoList data={DUMMY_INVENTORY} />
        </div>
      </div>
    </>
  );
}
