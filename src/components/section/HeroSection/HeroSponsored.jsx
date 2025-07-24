import {
  SiSteam,
  SiEpicgames,
  SiUbisoft,
  SiPlaystation,
  SiTwitch,
  SiKick,
} from "react-icons/si";
import { TbBrandElectronicArts } from "react-icons/tb";

export function HeroSponsored() {
  const heroSponsoredData = [
    {
      id: 1,
      icon: SiSteam,
    },
    {
      id: 2,
      icon: SiEpicgames,
    },
    {
      id: 3,
      icon: SiUbisoft,
    },
    {
      id: 4,
      icon: TbBrandElectronicArts,
    },
    {
      id: 5,
      icon: SiPlaystation,
    },
    {
      id: 6,
      icon: SiTwitch,
    },
    {
      id: 7,
      icon: SiKick,
    },
  ];
  return (
    <div className="w-full flex items-center justify-center gap-12 flex-wrap">
      {heroSponsoredData.map((item) => {
        const Icon = item.icon;
        return (
          <a href="#" key={item.id}>
            <Icon size={36} className="text-hover-1" />
          </a>
        );
      })}
    </div>
  );
}
