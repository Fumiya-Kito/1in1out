import MonoList from "./MonoList";
import { Category } from "@/app/type";

type CategoryListProps = {
  data: Category[];
};

export default function CategoryList({ data }: CategoryListProps) {
  const categoryIds = data.map((category) => category._id);
  const wishlist = data.find((category) => category._id === 1);
  const inventory = data.filter((category) => category._id !== 1);


  return (
    <>
    {wishlist && (
      <div className={"p-3 bg-pink-900"}>
          <div className="p-2 bg-sky-900">
            {wishlist.iconJsx}
            <h3>{wishlist.name}</h3>
            <p>{wishlist.upper_limit}</p>
            {wishlist.mono_data && (
              <MonoList data={wishlist.mono_data} categories={categoryIds} />
            )}
          </div>
      </div>
    )}

      <div className={"p-3 bg-green-900"}>
        {inventory.map((category) => (
          <div key={category._id} className="p-2 m-2 bg-sky-900">
            {category.iconJsx}
            <h3>{category.name}</h3>
            <p>{category.upper_limit}</p>
            {category.mono_data && (
              <MonoList data={category.mono_data} categories={categoryIds} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
