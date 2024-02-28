import Link from "next/link";
import MonoLinkList from "@/components/links/MonoLinkList";
import getMonosByCategory from "@/app/_lib/monos/getMonosByCategory";
import MonoForm from "@/components/form/MonoForm";
import getAllCategories from "@/app/_lib/categories/getAllCategories";
import CategoryForm from "@/components/form/CategoryForm";


export default async function InventoryPage(
  { params }: { params: { slug: string } }
) {
  // data fetchingを行う
  const { slug } = params;
  const [categoryId, _] = slug.split('_');
  const monoList = await getMonosByCategory(categoryId);
  const allCategoryList = await getAllCategories();
  const pageCategory = allCategoryList.find(ctg => ctg._id === +categoryId);

  return (
    <>
    <h1>Category: {pageCategory?.name}</h1>
    <CategoryForm type="UPDATE" data={pageCategory} />
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex bg-gray-900">
      <MonoLinkList data={monoList} />
    </div>
    <MonoForm type="CREATE" categoryList={allCategoryList} />
    </>
  );
}
