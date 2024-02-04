import { Mono } from "@/app/type";
import { getIconByString } from "@/components/icons/icons";

export default async function getMonosByCategory(
  categoryId: string | undefined
) {
  const fetchURI = categoryId
    ? `${process.env.HOST}/api/monos?category_id=${categoryId}`
    : `${process.env.HOST}/api/monos`;

  const res = await fetch(
    fetchURI,
    { cache: "no-cache" }
  );
  const data: Mono[] = await res.json();

  const monoListWithIcon = data.map((mono) => {
    return {
      ...mono,
      iconJsx: getIconByString(mono.icon),
    };
  });

  return monoListWithIcon;
}
