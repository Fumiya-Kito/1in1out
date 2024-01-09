import Link from "next/link";

type MonoListProps = {
  data: {
    id: number, 
    category_id: number, 
    icon: JSX.Element, 
    name: string, 
    reason: string
  }[];
}

export default function MonoList({ data }: MonoListProps) {
  return (
    <li className="list-none">
      {data.map((mono) => (
        <ul key={mono.id}>
          {mono.icon}
          {mono.name}
          {mono.reason}
        </ul>
      ))}
    </li>
  )
}

