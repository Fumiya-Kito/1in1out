import Form from '@/components/form/Form';

type CategoryEditProps = {
  params: {
    slug: number;
  }
}

export default function CategoryEditPage({ params }: CategoryEditProps) {
  return (
    <section>
      <h2>New Category Page</h2>
      <Form type={"UPDATE"}/>
    </section>
  );
}
