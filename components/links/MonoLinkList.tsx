import { Category, Mono } from "@/app/type";
import MonoCard from "@/components/cards/MonoCard";

export default function MonoLinkList({
  data,
  formProps
}: {
  data: Mono[];
  formProps: { categoryList: Category[]; categoryId: string };
}) {
  if (data.length === 0) {
    return <p>No Data in This Category</p>;
  }
  return (
    <li className="list-none grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
      {data.map((mono) => (
        <ul key={mono._id}>
          <MonoCard model={mono} formProps={formProps}/>
        </ul>
      ))}
    </li>
  );
}
