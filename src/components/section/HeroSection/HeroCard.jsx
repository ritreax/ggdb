export function HeroCard({ title, text }) {
  return (
    <div className="min-w-[200px] h-[150px] bg-card border border-border rounded-2xl flex flex-col items-center justify-center shadow-lg text-foreground">
      <h4 className="text-4xl font-semibold">{text}</h4>
      <span className="text-xl font-bold text-hover-2">{title}</span>
    </div>
  );
}
