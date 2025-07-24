import { Button } from "@/components/ui/Button";
import { RiArrowRightUpLine } from "react-icons/ri";

export function MostVisitedCard({ data }) {
  return (
    <div className="p-6 rounded-2xl bg-background border border-border flex flex-col gap-6 h-full">
      <div className="flex flex-col items-center gap-1">
        <img src={data.img} alt="" className="w-[100px] rounded-full" />
        <h4 className="text-lg font-semibold text-foreground">{data.name}</h4>
        <h5 className="text-sm font-semibold text-foreground">{data.title}</h5>
      </div>

      <div className="flex">
        <div className="w-[90px]">
          <h5 className="text-sm font-semibold text-foreground text-center">
            Projects
          </h5>
          <p className="text-xl font-semibold text-blue text-center">
            {data.projects}
          </p>
        </div>

        <div className="w-[90px]">
          <h5 className="text-sm font-semibold text-foreground text-center">
            Views
          </h5>
          <p className="text-xl font-semibold text-blue text-center">
            {data.views}
          </p>
        </div>

        <div className="w-[90px]">
          <h5 className="text-sm font-semibold text-foreground text-center">
            Rank
          </h5>
          <p className="text-xl font-semibold text-blue text-center">
            {data.rank}
          </p>
        </div>
      </div>

      <Button className="w-full shadow-md" color="SecondaryGray">
        <RiArrowRightUpLine size={20} />
        Profile View
      </Button>
    </div>
  );
}
