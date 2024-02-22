import { getIconByString } from "@/components/icons/icons";

export async function getCategory(categoryId: number) {
  const res = await fetch(`${process.env.HOST}/api/categories/${categoryId}`, {
    cache: "no-store",
  });
  const resData = await res.json();
  const data = { ...resData, iconJsx: getIconByString(resData.icon) };
  return data;
};