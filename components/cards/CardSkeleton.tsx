export function CardSkeleton({
  width,
  height,
}: {
  width?: string;
  height?: string;
}) {
  return (
    <div className={`overflow-hidden rounded border border-neutral-700 bg-neutral-800 my-0.5 shadow-sm`}>
      <div className={`${width} ${height}`}></div>
    </div>
  );
}
