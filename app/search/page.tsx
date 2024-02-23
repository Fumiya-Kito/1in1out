import FilteredMonoList from '@/components/links/FilteredMonoList';
import getMonosByCategory from '@/app/_lib/monos/getMonosByCategory';

export default async function SearchPage() {
  // data fetchingを行う
  const allMonos = await getMonosByCategory(undefined);
  return (
    <>
      <h1>This is Search Page</h1>
      <FilteredMonoList data={allMonos} />
    </>
  )
}