import Link from "next/link";
import EditIcon from "@/components/icons/EditIcon";

type MonoDetailProps = {
  params: {
    slug: number;
  };
};

export default function MonoDetailPage({ params }: MonoDetailProps) {
  return (
    <main>
      <div>
        <h1 className="text-center text-5xl font-bold mb-3">
          This is Mono Detail Page: {params.slug}
        </h1>
      </div>
      <div>
        <Link href={`/monoedit/${params.slug}`}>
          Edit This Mono
          <EditIcon />
        </Link>
      </div>
    </main>
  );
}
