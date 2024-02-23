import { Mono } from "@/app/type";
import Link from "next/link";


export default function MonoLinkList({ data }: { data: Mono[] }) {
  return (
    <li className="list-none">
      {data.map((mono) => (
        <ul key={mono._id}>
          <p>{mono.iconJsx}</p>
          <Link href={`/monodetail/${mono._id}`}>{mono.name}</Link>
        </ul>
      ))}
    </li>
  )
}

