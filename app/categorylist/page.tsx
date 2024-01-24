import Link from "next/link";
import CategoryLinkList from "@/components/links/CategoryLinkList";
import { PiBowlFood } from "react-icons/pi";
import { getIconByString } from "@/components/icons/icons";
import { Category } from "../type";

async function getCategoryList () {
  const res = await fetch(`http://localhost:3000/api/categories`, {
    cache: "no-cache",
  });
  const resData: Category[] = await res.json();
  const data = resData.map(category => {
    return { ...category, iconJsx: getIconByString(category.icon) }
  });
  return data;
};

export default async function CategoryListPage() {
  const categories = await getCategoryList();

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex bg-gray-900">
      <CategoryLinkList data={categories} />
      <p>
        <Link href="/newcategory">newcategory</Link>
      </p>
    </div>
  );
}

