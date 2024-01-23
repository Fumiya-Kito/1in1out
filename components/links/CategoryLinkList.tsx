// 'use client';

// import { useParams } from "next/navigation";
import Link from "next/link";
import { Category } from "@/app/type";

export default function CategoryLinkList({ data }: { data: Category[] }) {
  return (
    <li className="list-none">
      {data.map((category) => (
        <ul key={category._id}>
          <Link href={`/monolist/${category._id}_${category.name}`}>
            {category.iconJsx}
            {category.name}
          </Link>
        </ul>
      ))}
    </li>
  );
}
