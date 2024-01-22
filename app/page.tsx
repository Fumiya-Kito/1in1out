import CategoryList from "@/components/dragdrop/CategoryList";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { HiOutlineBattery0 } from "react-icons/hi2";
import { HiOutlineCake } from "react-icons/hi2";
import { PiBowlFood } from "react-icons/pi";

export default function ExchangePage() {
  const DUMMY_WISH = [
    {
      _id: "1",
      category_id: 0,
      icon: "desktop",
      iconJSX: <HiOutlineComputerDesktop />,
      name: "WISH1",
      reason: "reason1",
    },
    {
      _id: "2",
      category_id: 0,
      icon: "battery",
      iconJSX: <HiOutlineBattery0 />,
      name: "WISH2",
      reason: "reason2",
    },
    {
      _id: "3",
      category_id: 0,
      icon: "cake",
      iconJSX: <HiOutlineCake />,
      name: "WISH3",
      reason: "reason3",
    },
  ];

  const DUMMY_INVENTORY = [
    {
      _id: "1",
      category_id: 1,
      icon: "desktop",
      iconJSX: <HiOutlineComputerDesktop />,
      name: "mono1",
      reason: "reason1",
    },
    {
      _id: "2",
      category_id: 2,
      icon: "battery",
      iconJSX: <HiOutlineBattery0 />,
      name: "mono2",
      reason: "reason2",
    },
    {
      _id: "3",
      category_id: 3,
      icon: "cake",
      iconJSX: <HiOutlineCake />,
      name: "mono3",
      reason: "reason3",
    },
  ];

  const DUMMY_CATEGORIES = [
    {
      _id: 0,
      icon: "food",
      iconJsx: <PiBowlFood />,
      name: "wishlist",
      upper_limit: undefined,
      mono_data: DUMMY_WISH,
    },
    {
      _id: 1,
      icon: "food",
      iconJsx: <PiBowlFood />,
      name: "category1",
      upper_limit: 3,
      mono_data: DUMMY_INVENTORY,
    },
    {
      _id: 2,
      icon: "food",
      iconJsx: <PiBowlFood />,
      name: "category2",
      upper_limit: 4,
      mono_data: DUMMY_INVENTORY,
    },
    {
      _id: 3,
      icon: "food",
      iconJsx: <PiBowlFood />,
      name: "category3",
      upper_limit: 5,
      mono_data: DUMMY_INVENTORY,
    },
    {
      _id: 4,
      icon: "food",
      iconJsx: <PiBowlFood />,
      name: "category4",
      upper_limit: 6,
      mono_data: DUMMY_INVENTORY,
    },
  ];

  return (
    <>
      <h1>This is Exchange Page</h1>
      <CategoryList data={DUMMY_CATEGORIES} />
      {/* <div className="p-5 bg-pink-900">
        <h3>wishlist</h3>
        <div className="p-2 m-2 bg-sky-900">
          <MonoList data={DUMMY_WISH} />
        </div>
      </div> */}
      {/* <div className="p-5 bg-green-950">
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
      </div> */}
    </>
  );
}
