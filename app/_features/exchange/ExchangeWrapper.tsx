import getAllCategories from "@/app/_lib/categories/getAllCategories";
import { Category, Mono } from "@/app/type";
import getMonosByCategory from "@/app/_lib/monos/getMonosByCategory";
import ExchangeBord from "@/app/_features/exchange/ExchangeBord";

export default async function ExchangeWrapper() {
  const allCategoryList: Category[] = await getAllCategories();
  const allMonoList: Mono[] = await getMonosByCategory(undefined);

  return (
      <ExchangeBord allMonoList={allMonoList} allCategoryList={allCategoryList} />
  );
}

