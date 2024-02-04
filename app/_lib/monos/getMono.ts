import { getIconByString } from "@/components/icons/icons";

export async function getMono(monoId: string) {
  const res = await fetch(`${process.env.HOST}/api/monos/${monoId}`, {
    cache: "no-store",
  });
  const resData = await res.json();
  const data = { ...resData, iconJsx: getIconByString(resData.icon) };
  return data;
};