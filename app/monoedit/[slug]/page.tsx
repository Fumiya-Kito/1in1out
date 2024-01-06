type MonoEditProps = {
  params: {
    slug: number;
  }
}

export default function MonoDetailPage({ params }: MonoEditProps) {
  return (
    <main>
      <div>
        <h1 className="text-center text-5xl font-bold mb-3">This is Mono Edit Page: {params.slug}</h1>
      </div>
    </main>
  );
}
