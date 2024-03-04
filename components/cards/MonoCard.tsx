import { Mono } from "@/app/type";
import { IoIosArrowDown } from "react-icons/io";

export default function CategoryCard({ model }: { model: Mono }) {
  return (
    <div className="flex items-center px-2 py-3 bg-sky-950 hover:bg-sky-900 lg:rounded-lg">
      <div className="flex-none w-10">{model.iconJsx}</div>
      <div className="flex-auto text-base min-w-0">
        <p className="truncate">{model.name}</p>
      </div>
      <div className="flex-none w-8">
        <IoIosArrowDown size={26} />
      </div>
    </div>
  );
}
