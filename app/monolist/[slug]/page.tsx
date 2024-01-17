import Link from "next/link";
import MonoLinkList from "@/components/links/MonoLinkList";
// import ComputerIcon from "@/components/icons/ComputerIcon";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

/**1. try-catch, 2. 外だし */ 
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
  console.log(params);
  const { slug } = params;
  const [categoryId, _] = slug.split('_');
  const monoList = await getMonos(categoryId);
  console.log("monolist", monoList);

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex bg-gray-900">
      <MonoLinkList data={monoList} />
      <p>
        <Link href="/newmono">new mono</Link>
      </p>
    </div>
  );
}
