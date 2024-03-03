import { Category } from "@/app/type";
import { getIconByString } from "@/components/icons/icons";

export default async function getAllCategories() {
  const res = await fetch(`${process.env.HOST}/api/categories`, {
    cache: "no-cache",
  });
  const resData: Category[] = await res.json();
  const data = resData.map((category) => ({
    ...category,
    iconJsx: getIconByString(category.icon, 26),
  }));
  return data;
}
