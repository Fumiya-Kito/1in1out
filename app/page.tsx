import CategoryList from "@/app/_features/exchange/CategoryList";
import getAllCategories from "./_lib/categories/getAllCategories";
import { Category, Mono } from "./type";
import getMonosByCategory from "./_lib/monos/getMonosByCategory";
import ExchangeBord from "./_features/exchange/ExchangeBord";

export default async function ExchangePage() {
  const allCategoryList: Category[] = await getAllCategories();
  const allMonoList: Mono[] = await getMonosByCategory(undefined);

  const joinedDataList = allCategoryList.map((category) => {
    const monoInCategory: Mono[] = allMonoList.filter(
      (mono) => mono.category_id === category._id
    );
    return { ...category, mono_data: monoInCategory };
  });

  

  return (
    <>
      <ExchangeBord allMonoList={allMonoList} allCategoryList={allCategoryList} />
      {/* <CategoryList data={joinedDataList} /> */}
    </>
  );
}
