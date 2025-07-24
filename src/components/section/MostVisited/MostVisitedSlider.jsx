import { Slider } from "@/components/ui/Slider";
import { MostVisitedCard } from "./MostVisitedCard";

const mostVisitedData = [
  {
    id: 1,
    img: "jhon-doe.png",
    name: "Jhon Doe",
    title: "Game Director",
    projects: "4",
    views: "15.4K",
    rank: "8",
  },{
    id: 2,
    img: "jhon-doe.png",
    name: "Jhon Doe",
    title: "Game Director",
    projects: "4",
    views: "15.4K",
    rank: "8",
  },{
    id: 3,
    img: "jhon-doe.png",
    name: "Jhon Doe",
    title: "Game Director",
    projects: "4",
    views: "15.4K",
    rank: "8",
  },{
    id: 4,
    img: "jhon-doe.png",
    name: "Jhon Doe",
    title: "Game Director",
    projects: "4",
    views: "15.4K",
    rank: "8",
  },{
    id: 5,
    img: "jhon-doe.png",
    name: "Jhon Doe",
    title: "Game Director",
    projects: "4",
    views: "15.4K",
    rank: "8",
  },
];

export function MostVisitedSlider() {
  return (
    <Slider>
      {mostVisitedData.map((item) => (
        <div key={item.id} className="pl-4 flex-shrink-0">
          <MostVisitedCard data={item} />
        </div>
      ))}
    </Slider>
  );
}
