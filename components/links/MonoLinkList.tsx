import { Mono } from "@/app/type";
import Link from "next/link";

type MonoListProps = {
  data: Mono[];
}

export default function MonoLinkList({ data }: MonoListProps) {
  return (
    <li className="list-none">
      {data.map((mono) => (
        <ul key={mono._id}>
          {mono.icon}
          <Link href={`/monodetail/${mono._id}`}>{mono.name}</Link>
        </ul>
      ))}
    </li>
  )
}

