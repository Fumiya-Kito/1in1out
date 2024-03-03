import { Category } from "@/app/type";
import { FaAngleRight } from "react-icons/fa6";


export default function CategoryCard({model}: {model: Category}) {
  const existingMonoNumber = model.mono_data ? model.mono_data.length: 0;
  // const displayName = model.name.length > 20 ? model.name.slice(0, 20)+'...' : model.name
  return (
    <div className="flex items-center p-2 bg-sky-950 hover:bg-sky-900 lg:rounded-lg">
      <div className="flex-none w-10">
        {model.iconJsx}
      </div>
      <div className="flex-auto text-base min-w-0">
        <p className="truncate">{model.name}</p>
      </div>
      <div className="flex-none w-12">
        <p className="text-right px-0.5">{`${existingMonoNumber}/${model.upper_limit}`}</p>
      </div>
      <div className="flex-none w-8">
        <FaAngleRight size={26}/>
      </div>
    </div>
  );
}