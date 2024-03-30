'use client';

type MenuItemProps = {
  label: string,
  onClick: () => void,
}

function MenuItem ({ label, onClick }: MenuItemProps) {
  return (
    <div
      onClick={onClick}
      className="p-1 text-enter hover:bg-neutral-700"
    >
      {label} 
    </div>
  )
}

export default MenuItem;