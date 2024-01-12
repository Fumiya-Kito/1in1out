import MonoList from "./MonoList";
import { Category } from "@/app/type";

type CategoryListProps = {
  data: Category[];
};

export default function CategoryList({ data }: CategoryListProps) {
  const categoryIds = data.map((category) => category.id);
  const wishlist = data.find((category) => category.id === 0);
  const inventory = data.filter((category) => category.id !== 0);

  console.log(wishlist);

  return (
    <>
    {wishlist && (
      <div className={"p-3 bg-pink-900"}>
          <div className="p-2 bg-sky-900">
            {wishlist.icon}
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
          <div key={category.id} className="p-2 m-2 bg-sky-900">
            {category.icon}
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
