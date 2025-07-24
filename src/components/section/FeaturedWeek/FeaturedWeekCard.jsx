import { Button } from "@/components/ui/Button";
import { ProgressCircle } from "@/components/ui/ProgressCircle";

import { MdGamepad } from "react-icons/md";
import { FaBookmark, FaHeart } from "react-icons/fa";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { RiArrowRightUpLine } from "react-icons/ri";

const featuredWeekCardButtonData = [
  { id: 1, icon: MdGamepad },
  { id: 2, icon: FaBookmark },
  { id: 3, icon: AiFillLike },
  { id: 4, icon: FaHeart },
  { id: 5, icon: AiFillDislike },
];

export function FeaturedWeekCard({ game }) {
  const gameRating = game?.rating || 7.8;

  return (
    <div className="p-6 rounded-2xl bg-background border border-border flex flex-col gap-6 h-full">
      <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
        <img
          src={game.imageUrl}
          alt={game.title}
          className=" sm:w-[190px] h-auto object-cover rounded-lg flex-shrink-0"
        />
        <div className="flex flex-col gap-3 items-start">
          <span className="font-semibold px-4 py-1.5 rounded-lg bg-blue-600 text-white">
            {game.year}
          </span>
          <h4 className="text-3xl font-semibold text-foreground overflow-hidden text-ellipsis text-nowrap w-[17ch]">
            {game.title}
          </h4>
          <span className="font-semibold px-4 py-1.5 rounded-lg bg-background shadow-sm border border-border">
            {game.genre}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-auto flex-wrap sm:flex-nowrap">
        <div className="w-full sm:w-[190px] flex flex-col gap-2 items-center flex-shrink-0">
          <ProgressCircle
            rating={gameRating}
            maxRating={10}
            size={90}
            strokeWidth={8}
            color="#0f6be9"
          />
          <span className="font-semibold text-foreground text-center">
            {game.ratingCount} Ratings
          </span>
        </div>

        <div className="flex-1 flex flex-col gap-3 w-full">
          <div className="flex gap-2 justify-between flex-wrap">
            {featuredWeekCardButtonData.map(({ id, icon: Icon }) => (
              <Button key={id} size="onlyIcon_md" color="SecondaryGray">
                <Icon size={20} />
              </Button>
            ))}
          </div>

          <Button className="w-full shadow-md" color="SecondaryGray">
            <RiArrowRightUpLine size={20} />
            Game Details
          </Button>
        </div>
      </div>
    </div>
  );
}
