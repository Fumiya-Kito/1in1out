import Link from "next/link";
import MonoLinkList from "@/components/links/MonoLinkList";
// import ComputerIcon from "@/components/icons/ComputerIcon";
// import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { getIconByString } from "@/components/icons/icons";
import { Mono } from "@/app/type";

/**1. try-catch, 2. 外だし 3. no-store調べる*/ 
const getMonos = async (categoryId: string) => {
  const res = await fetch(
    `http://localhost:3000/api/monos?category_id=${categoryId}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
};

export default async function InventoryPage(
  { params }: { params: { slug: string } }
) {
  // data fetchingを行う
  const { slug } = params;
  const [categoryId, _] = slug.split('_');
  const monoList: Mono[] = await getMonos(categoryId);

  console.log(monoList);
  const monoListWithIcon = monoList.map(mono => {
    return {
      ...mono,
      iconJsx: getIconByString(mono.icon),
    }
  });

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex bg-gray-900">
      <MonoLinkList data={monoListWithIcon} />
      <button className="p-1 m-1 bg-cyan-500 text-black rounded-lg">
        <Link href="/newmono">new mono</Link>
      </button>
    </div>
  );
}
