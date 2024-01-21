import { MonoDetail } from "@/components/detail/MonoDetail";
import { getIconByString } from "@/components/icons/icons";

/**1. try-catch, 2. 外だし 3. no-store調べる*/
const getMono = async (monoId: string) => {
  const res = await fetch(`http://localhost:3000/api/monos/${monoId}`, {
    cache: "no-store",
  });
  const resData = await res.json();
  const data = { ...resData, iconJsx: getIconByString(resData.icon) };
  return data;
};

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
