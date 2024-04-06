import CategoryLinkList from "@/components/links/CategoryLinkList";

import CategoryForm from "@/components/form/CategoryForm";


export default async function CategoryListPage() {


  return (
    <div>
      <div className="z-10 w-full items-center justify-between font-mono text-sm">
        <CategoryLinkList />
      </div>
      <div className="fixed right-6 bottom-6 shadow-md">
        <CategoryForm type="CREATE" />
      </div>
    </div>
  );
}

