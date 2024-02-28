import Link from "next/link";
import CategoryLinkList from "@/components/links/CategoryLinkList";

import getAllCategories from "@/app/_lib/categories/getAllCategories";
import CategoryForm from "@/components/form/CategoryForm";


export default async function CategoryListPage() {
  const categories = await getAllCategories();

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex bg-gray-900">
      <CategoryLinkList data={categories} />
      <CategoryForm type="CREATE" />
    </div>
  );
}

