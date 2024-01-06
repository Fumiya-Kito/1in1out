type CategoryEditProps = {
  params: {
    slug: number;
  }
}

export default function CategoryDetailPage({ params }: CategoryEditProps) {
  return (
    <main>
      <div>
        <h1 className="text-center text-5xl font-bold mb-3">This is Category Edit Page: {params.slug}</h1>
      </div>
    </main>
  );
}
