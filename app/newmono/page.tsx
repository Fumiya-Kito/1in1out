import MonoForm from "@/components/form/MonoForm";
import getAllCategories from "../_lib/categories/getAllCategories";

export default async function NewMonoPage() {
  const allCategoryList = await getAllCategories();
  return (
    <section>
      <h1>New Mono Page</h1>
      <MonoForm type="CREATE" categoryList={allCategoryList} />
    </section>
  );
}
