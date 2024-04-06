import MonoLinkList from "@/components/links/MonoLinkList";
import getMonosByCategory from "@/app/_lib/monos/getMonosByCategory";
import MonoForm from "@/components/form/MonoForm";
import getAllCategories from "@/app/_lib/categories/getAllCategories";
import CategoryForm from "@/components/form/CategoryForm";
import DeleteForm from "@/components/form/DeleteForm";

export default async function InventoryPage({
  params,
}: {
  params: { slug: string };
}) {
  // data fetchingを行う
  const { slug } = params;
  const [categoryId, _] = slug.split("_");
  const isWishList = +categoryId === 1;
  const monoList = await getMonosByCategory(categoryId);
  const allCategoryList = await getAllCategories();

  const pageCategory = allCategoryList.find((ctg) => ctg._id === +categoryId)!;

  const formProps = pageCategory
    ? { categoryId: pageCategory._id.toString(), categoryList: allCategoryList }
    : undefined;

  return (
    <>
      <section
        id="page-header"
        className="flex items-center lg:mb-4 box-border border-b border-white"
      >
        <div className="px-2">
          <h1 className="sm:text-lg">{pageCategory?.name.toUpperCase()}</h1>
        </div>
        {!isWishList && (
          <div className="flex-none ml-auto">
            <CategoryForm type="UPDATE" data={pageCategory} />
            {formProps && <DeleteForm model={pageCategory} pk={categoryId} />}
          </div>
        )}
      </section>
      <section
        id="mono-list"
        className="z-10 w-full items-center justify-between font-mono text-sm"
      >
        {formProps && <MonoLinkList data={monoList} formProps={formProps} />}
      </section>
      {monoList.length < pageCategory.upper_limit && (
        <div className="fixed right-6 bottom-6 shadow-md">
          <MonoForm
            type="CREATE"
            categoryList={allCategoryList}
            categoryId={categoryId}
          />
        </div>
      )}
    </>
  );
}
