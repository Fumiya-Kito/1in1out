import { Mono } from "@/app/type";
import MonoItem from "./MonoItem";

type MonoListProps = {
  data: Mono[];
  categories: number[];
}

export default function MonoList({ data, categories }: MonoListProps) {
  /**TODO ここに関数定義しないとだめ(もうひとつ上かもしれない), MonoItemのid変更と、monoListの変更 */
  return (
    <li className="list-none flex">
      {data.map((mono) => (
        <MonoItem item={mono} categories={categories} />
      ))}
    </li>
  )
}

