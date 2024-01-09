// 'use client';

// import { useParams } from "next/navigation";
import Link from "next/link";

type MonoListProps = {
  data: {
    id: number, 
    category_id: number, 
    icon: JSX.Element, 
    name: string, 
    reason: string
  }[];
}

export default function MonoLinkList({ data }: MonoListProps) {
  return (
    <li className="list-none">
      {data.map((mono) => (
        <ul key={mono.id}>
          {mono.icon}
          <Link href={`/monodetail/${mono.id}`}>{mono.name}</Link>
        </ul>
      ))}
    </li>
  )
}

