import { FaLocationDot, FaStar, FaGamepad } from "react-icons/fa6";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";
import { Button } from "@/components/ui/Button";

export function TopCompaniesCard({ data }) {
  const Icon = data.icon;
  return (
    <div className="p-6 rounded-2xl bg-background border border-border flex flex-col gap-4.5 h-full">
      <div className="flex items-center gap-4">
        <span className="w-[60px] h-[60px] flex items-center justify-center bg-background border border-border shadow-md rounded-2xl">
          <Icon size={30} className="text-foreground" />
        </span>

        <div>
          <h4 className="text-lg font-semibold text-foreground">{data.name}</h4>
          <span className="flex items-center gap-1 text-sm font-semibold text-foreground">
            <FaLocationDot />
            {data.country}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="px-3.5 py-2 bg-input rounded-2xl flex-1">
          <h6 className="text-sm font-semibold text-foreground">Rating</h6>
          <span className="font-semibold text-xl text-blue flex items-center gap-1">
            <FaStar size={20} />
            {data.rating}
          </span>
        </div>

        <div className="px-3.5 py-2 bg-input rounded-2xl flex-1">
          <h6 className="text-sm font-semibold text-foreground">Games</h6>
          <span className="font-semibold text-xl text-blue flex items-center gap-1">
            <FaGamepad size={20} />
            {data.games}
          </span>
        </div>
      </div>

      <p className="w-[358px] text-foreground line-clamp-2">
        {data.description}
      </p>

      <div className="flex flex-col gap-1">
        <span className="flex items-center gap-1 text-foreground">
          <FaCalendarAlt size={18} />
          Founded: {data.founded}
        </span>
        <span className="flex items-center gap-1 text-foreground">
          <FaUsers size={18} />
          Employees: {data.employees}
        </span>
      </div>

      <div className="pt-3 border-t border-border flex flex-col gap-2">
        <h6 className="font-semibold text-foreground">Popular Games:</h6>
        <div className="flex items-center gap-2">
          {data.popularGames.map((item) => {
            return (
              <span
                key={item.id}
                className="bg-background border border-border rounded-lg text-foreground shadow-md px-3 py-1.5"
              >
                {item.name}
              </span>
            );
          })}
        </div>
      </div>

      <Button className="w-full shadow-md" color="SecondaryGray">
        <RiArrowRightUpLine size={20} />
        Company Profile View
      </Button>
    </div>
  );
}
