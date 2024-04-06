import Link from "next/link";
import CategoryCard from "../cards/CategoryCard";
import getAllCategories from "@/app/_lib/categories/getAllCategories";
import getMonosByCategory from "@/app/_lib/monos/getMonosByCategory";

export default async function CategoryLinkList() {
  const categoryList = await getAllCategories();
  const allMonoList = await getMonosByCategory(undefined);

  return (
    <li className="list-none grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
      {categoryList.map((category) => (
        <ul key={category._id}>
          <Link href={`/monolist/${category._id}_${category.name}`}>
            <CategoryCard model={category} monos={allMonoList.filter((mono) => mono.category_id === category._id)}/>
          </Link>
        </ul>
      ))}
    </li>
  );
}
