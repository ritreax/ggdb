import { SiRockstargames } from "react-icons/si";
import { Slider } from "@/components/ui/Slider";
import { TopCompaniesCard } from "./TopCompaniesCard";

const topCompaniesData = [
  {
    id: 1,
    icon: SiRockstargames,
    name: "Rockstar Games",
    country: "USA",
    rating: "8.9",
    games: "15",
    description: "Open-world pioneers with unmatched production values",
    founded: "1986",
    employees: "2000+",
    popularGames: [
      {
        id: 1,
        name: "GTA V",
      },
      {
        id: 2,
        name: "Red Dead Redemption 2",
      },
    ],
  },
  {
    id: 2,
    icon: SiRockstargames,
    name: "Rockstar Games",
    country: "USA",
    rating: "8.9",
    games: "15",
    description: "Open-world pioneers with unmatched production values",
    founded: "1986",
    employees: "2000+",
    popularGames: [
      {
        id: 1,
        name: "GTA V",
      },
      {
        id: 2,
        name: "Red Dead Redemption 2",
      },
    ],
  },
  {
    id: 3,
    icon: SiRockstargames,
    name: "Rockstar Games",
    country: "USA",
    rating: "8.9",
    games: "15",
    description: "Open-world pioneers with unmatched production values",
    founded: "1986",
    employees: "2000+",
    popularGames: [
      {
        id: 1,
        name: "GTA V",
      },
      {
        id: 2,
        name: "Red Dead Redemption 2",
      },
    ],
  },
  {
    id: 4,
    icon: SiRockstargames,
    name: "Rockstar Games",
    country: "USA",
    rating: "8.9",
    games: "15",
    description: "Open-world pioneers with unmatched production values",
    founded: "1986",
    employees: "2000+",
    popularGames: [
      {
        id: 1,
        name: "GTA V",
      },
      {
        id: 2,
        name: "Red Dead Redemption 2",
      },
    ],
  },
  {
    id: 5,
    icon: SiRockstargames,
    name: "Rockstar Games",
    country: "USA",
    rating: "8.9",
    games: "15",
    description: "Open-world pioneers with unmatched production values",
    founded: "1986",
    employees: "2000+",
    popularGames: [
      {
        id: 1,
        name: "GTA V",
      },
      {
        id: 2,
        name: "Red Dead Redemption 2",
      },
    ],
  },
];

export function TopCompaniesSlider() {
  return (
    <Slider>
      {topCompaniesData.map((item) => (
        <div key={item.id} className="pl-4 flex-shrink-0">
          <TopCompaniesCard data={item} />
        </div>
      ))}
    </Slider>
  );
}
