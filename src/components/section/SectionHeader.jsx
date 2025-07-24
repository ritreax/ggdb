export function SectionHeader({data}) {
  return (
    <div className="flex items-stretch gap-2">
      <span className="w-2 bg-blue" />
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold text-foreground">{data.title}</h2>
        <p className="font-semibold text-foreground">{data.text}</p>
      </div>
    </div>
  );
}
