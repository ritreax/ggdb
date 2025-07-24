import { Slider } from "@/components/ui/Slider";
import { FeaturedWeekCard } from "./FeaturedWeekCard";

const featuredGamesData = [
  {
    id: 1,
    title: "Little Nightmaresasdasdasdasd",
    year: "2017",
    genre: "Adventure",
    rating: 7.8,
    ratingCount: 656,
    imageUrl: "/LittleNightmares.png",
  },
  {
    id: 2,
    title: "Little Nightmares",
    year: "2017",
    genre: "Adventure",
    rating: 7.8,
    ratingCount: 656,
    imageUrl: "/LittleNightmares.png",
  },
  {
    id: 3,
    title: "Little Nightmares",
    year: "2017",
    genre: "Adventure",
    rating: 7.8,
    ratingCount: 656,
    imageUrl: "/LittleNightmares.png",
  },

  {
    id: 4,
    title: "Little Nightmares",
    year: "2017",
    genre: "Adventure",
    rating: 7.8,
    ratingCount: 656,
    imageUrl: "/LittleNightmares.png",
  },
];

export function FeaturedWeekSlider() {
  return (
    <Slider>
      {featuredGamesData.map((game) => (
        <div
          key={game.id}
          className="pl-4 flex-shrink-0 sm:w-[550px] w-[350px]"
        >
          <FeaturedWeekCard game={game} />
        </div>
      ))}
    </Slider>
  );
}
