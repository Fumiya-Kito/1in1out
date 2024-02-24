import CategoryList from "@/components/dragdrop/CategoryList";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { HiOutlineBattery0 } from "react-icons/hi2";
import { HiOutlineCake } from "react-icons/hi2";
import { PiBowlFood } from "react-icons/pi";
import getAllCategories from "./_lib/categories/getAllCategories";
import { Category, Mono } from "./type";
import getMonosByCategory from "./_lib/monos/getMonosByCategory";

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
      <h1>This is Exchange Page</h1>
      <CategoryList data={joinedDataList} />
    </>
  );
}
