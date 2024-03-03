import Link from "next/link";
import CategoryLinkList from "@/components/links/CategoryLinkList";

import getAllCategories from "@/app/_lib/categories/getAllCategories";
import CategoryForm from "@/components/form/CategoryForm";


export default async function CategoryListPage() {
  const categories = await getAllCategories();

  return (
    <div>
      <div className="z-10 w-full items-center justify-between font-mono text-sm">
        <CategoryLinkList data={categories} />
      </div>
      <div className="fixed right-6 bottom-6 shadow-md">
        <CategoryForm type="CREATE" />
      </div>
    </div>
  );
}

