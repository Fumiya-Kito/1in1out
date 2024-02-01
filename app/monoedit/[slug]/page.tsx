import { getMono } from "@/app/_lib/monos/getMono";

type MonoEditProps = {
  params: {
    slug: string;
  }
}

export default async function MonoDetailPage({ params }: MonoEditProps) {
  const mono = await getMono(params.slug);
  return (
    <main>
      <div>
        <h1 className="text-center text-5xl font-bold mb-3">This is Mono Edit Page: {params.slug}</h1>
      </div>
    </main>
  );
}
