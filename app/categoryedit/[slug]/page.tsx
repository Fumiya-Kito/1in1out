import Form from '@/components/form/CategoryForm';
import { getCategory } from '@/app/_lib/categories/getCategory';


export default async function CategoryEditPage({ params }: { params: { slug: string } }) {
  const categoryData = await getCategory(+params.slug);

  return (
    <section>
      <h2>Category Edit Page</h2>
      <Form type={"UPDATE"} data={categoryData}/>
    </section>
  );
}
