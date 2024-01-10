type CategoryListProps = {
  data: {
    id: number, 
    icon: JSX.Element, 
    name: string, 
    upper_limit: number
  }[];
}

export default function CategoryList({ data }: CategoryListProps) {
  return (
    <li className="list-none">
      {data.map((category) => (
        <ul key={category.id}>
          {/* {category.icon} */}
          {category.name}
          {category.upper_limit}
        </ul>
      ))}
    </li>
  )
}

