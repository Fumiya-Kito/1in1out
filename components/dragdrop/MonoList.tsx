import Link from "next/link";
import Mono from "./Mono";

type MonoListProps = {
  data: {
    id: number, 
    category_id: number, 
    icon: JSX.Element, 
    name: string, 
    reason: string
  }[];
}

export default function MonoList({ data }: MonoListProps) {
  return (
    <li className="list-none flex">
      {data.map((mono) => (
        <Mono item={mono} />
      ))}
    </li>
  )
}

