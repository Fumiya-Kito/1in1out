import { Mono } from "@/app/type";
import Link from "next/link";
import MonoCard from '@/components/cards/MonoCard'


export default function MonoLinkList({ data }: { data: Mono[] }) {
  if (data.length === 0) {
    return <p>No Data in This Category</p>
  }
  return (
    <li className="list-none grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
      {data.map((mono) => (
        <ul key={mono._id}>
          <Link href={`/monodetail/${mono._id}`}>
            <MonoCard model={mono}/>
          </Link>
        </ul>
      ))}
    </li>
  )
}

