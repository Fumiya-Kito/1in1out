import Link from "next/link";
import CategoryList from "@/components/lists/categorylist";
import { PiBowlFood } from "react-icons/pi";

export default function HomePage() {
  const DUMMY_CATEGORIES = [
    { id: 1, icon: <PiBowlFood />, name: "category1", upper_limit: 3 },
    { id: 2, icon: <PiBowlFood />, name: "category2", upper_limit: 4 },
    { id: 3, icon: <PiBowlFood />, name: "category3", upper_limit: 5 },
    { id: 4, icon: <PiBowlFood />, name: "category4", upper_limit: 6 },
  ];

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex bg-gray-900">
      <CategoryList data={DUMMY_CATEGORIES} />
      <p>
        <Link href="/newcategory">newcategory</Link>
      </p>
    </div>
  );
}
