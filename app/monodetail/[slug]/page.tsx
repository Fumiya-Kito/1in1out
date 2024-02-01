import { MonoDetail } from "@/components/detail/MonoDetail";
import { getMono } from "@/app/_lib/monos/getMono";


export default async function MonoDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const mono = await getMono(params.slug);
  console.log(mono); /**TEST */
  return (
    <main>
      <div>
        <h1 className="text-center text-5xl font-bold mb-3">
          This is Mono Detail Page
        </h1>
        <MonoDetail item={mono} />
      </div>
    </main>
  );
}
