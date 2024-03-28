import getAllCategories from "./_lib/categories/getAllCategories";
import { Category, Mono } from "./type";
import getMonosByCategory from "./_lib/monos/getMonosByCategory";
import ExchangeBord from "./_features/exchange/ExchangeBord";

export default async function ExchangePage() {
  const allCategoryList: Category[] = await getAllCategories();
  const allMonoList: Mono[] = await getMonosByCategory(undefined);

  return (
    <>
      <ExchangeBord allMonoList={allMonoList} allCategoryList={allCategoryList} />
    </>
  );
}
