import Link from "next/link";

export default function HomePage() {
  const DUMMY_CATEGORIES = [
    { id: 1, icon: "XXX", name: "category1", upper_limit: 3 },
    { id: 2, icon: "XXX", name: "category2", upper_limit: 4 },
    { id: 3, icon: "XXX", name: "category3", upper_limit: 5 },
    { id: 4, icon: "XXX", name: "category4", upper_limit: 6 },
  ];

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex bg-gray-900">
      <li className="list-none">
        {DUMMY_CATEGORIES.map((category) => (
          <ul key={category.id}>
            <Link href={`/monolist/${category.id}_${category.name}`}>{category.name}</Link>
          </ul>
        ))}
      </li>
      <p>
        <Link href="/newcategory">newcategory</Link>
      </p>
    </div>
  );
}
