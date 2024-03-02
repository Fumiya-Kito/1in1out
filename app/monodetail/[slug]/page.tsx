import { MonoDetail } from "@/app/_features/monodetail/MonoDetail";
import { getMono } from "@/app/_lib/monos/getMono";
import getAllCategories from "@/app/_lib/categories/getAllCategories";


export default async function MonoDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const mono = await getMono(params.slug);
  const allCategoryList = await getAllCategories();

  return (
    <main>
      <div>
        <h1 className="text-center text-5xl font-bold mb-3">
          This is Mono Detail Page
        </h1>
        <MonoDetail item={mono} categoryList={allCategoryList}/>
      </div>
    </main>
  );
}
