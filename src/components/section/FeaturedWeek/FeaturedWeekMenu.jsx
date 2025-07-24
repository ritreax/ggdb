import { Button } from "@/components/ui/Button";

import { MdDesktopMac, MdGamepad } from "react-icons/md";
import { FaMobile } from "react-icons/fa";

export function FeaturedWeekMenu() {
  const featuredWeekMenuData = [
    {
      id: 1,
      text: "PC",
      icon: MdDesktopMac,
    },
    {
      id: 2,
      text: "Console",
      icon: MdGamepad,
    },
    {
      id: 3,
      text: "Mobile",
      icon: FaMobile,
    },
  ];

  return (
    <div className="flex items-center gap-1.5 border-b border-b-border">
      {featuredWeekMenuData.map((item) => {
        const Icon = item.icon;
        return (
          <Button key={item.id} color="Transparent">
            <Icon size={20} />
            {item.text}
          </Button>
        );
      })}
    </div>
  );
}
