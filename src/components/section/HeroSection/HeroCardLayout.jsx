import { HeroCard } from "./HeroCard";

export function HeroCardLayout() {
  const heroCardData = [
    {
      id: 1,
      title: "User",
      text: "12.0M",
    },
    {
      id: 2,
      title: "Games",
      text: "500K",
    },
    {
      id: 3,
      title: "Game Developer",
      text: "1K",
    },
    {
      id: 4,
      title: "Publisher",
      text: "500",
    },
    {
      id: 5,
      title: "Category",
      text: "585",
    },
  ];
  return (
    <div className="w-full flex items-center justify-center gap-12 flex-wrap">
      {heroCardData.map((item) => (
        <HeroCard key={item.id} title={item.title} text={item.text} />
      ))}
    </div>
  );
}
