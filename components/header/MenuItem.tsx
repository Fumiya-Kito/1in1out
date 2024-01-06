'use client';

type MenuItemProps = {
  label: string,
  onClick: () => void,
}

function MenuItem ({ label, onClick }: MenuItemProps) {
  return (
    <div
      onClick={onClick}
      className="px-2 py-1 text-enter"
    >
      {label} 
    </div>
  )
}

export default MenuItem;