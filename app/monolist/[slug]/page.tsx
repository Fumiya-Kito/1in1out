import Link from "next/link";
import MonoList from "@/components/lists/monolist";
// import ComputerIcon from "@/components/icons/ComputerIcon";
import { HiOutlineComputerDesktop } from "react-icons/hi2"

export default function InventoryPage() {
  // data fetchingを行う
  const DUMMY_MONOS = [
    { id: 1, category_id: 1, icon: <HiOutlineComputerDesktop />, name: 'mono1', reason: 'reason1' },
    { id: 2, category_id: 2, icon: <HiOutlineComputerDesktop />, name: 'mono2', reason: 'reason2' },
    { id: 3, category_id: 3, icon: <HiOutlineComputerDesktop />, name: 'mono3', reason: 'reason3' },
    { id: 4, category_id: 4, icon: <HiOutlineComputerDesktop />, name: 'mono4', reason: 'reason4' },
  ];

  return (
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex bg-gray-900">
        <MonoList data={DUMMY_MONOS} />
        {/* <li className="list-none">
          {DUMMY_MONOS.map((mono) => (
            <ul key={mono.id}>
              <Link href={`/monodetail/${mono.id}`}>{mono.name}</Link>
            </ul>
          ))}
        </li> */}
        <p><Link href="/newmono">new mono</Link></p>
      </div>
  );
}
