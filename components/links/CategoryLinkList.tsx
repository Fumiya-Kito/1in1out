// 'use client';

// import { useParams } from "next/navigation";
import Link from "next/link";
import { Category } from "@/app/type";
import CategoryCard from "../cards/CategoryCard";

export default function CategoryLinkList({ data }: { data: Category[] }) {
  return (
    <li className="list-none grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
      {data.map((category) => (
        <ul key={category._id}>
          <Link href={`/monolist/${category._id}_${category.name}`}>
            <CategoryCard model={category} />
          </Link>
        </ul>
      ))}
    </li>
  );
}
