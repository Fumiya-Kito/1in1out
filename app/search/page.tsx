import FilteredMonoList from '@/app/_features/search/FilteredMonoList';
import getMonosByCategory from '@/app/_lib/monos/getMonosByCategory';
import getAllCategories from '@/app/_lib/categories/getAllCategories';

export default async function SearchPage() {
  // data fetchingを行う
  const allMonos = await getMonosByCategory(undefined);
  const allCategoryList = await getAllCategories();

  return (
    <>
      <FilteredMonoList data={allMonos} categoryList={allCategoryList}/>
    </>
  )
}