import Link from "next/link";
import MonoLinkList from "@/components/links/MonoLinkList";
import getMonosByCategory from "@/app/_lib/monos/getMonosByCategory";


export default async function InventoryPage(
  { params }: { params: { slug: string } }
) {
  // data fetchingを行う
  const { slug } = params;
  const [categoryId, _] = slug.split('_');
  const monoList = await getMonosByCategory(categoryId);

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex bg-gray-900">
      <MonoLinkList data={monoList} />
      <button className="p-1 m-1 bg-cyan-500 text-black rounded-lg">
        <Link href="/newmono">new mono</Link>
      </button>
    </div>
  );
}
