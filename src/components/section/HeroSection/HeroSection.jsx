import { HeroCardLayout } from "./HeroCardLayout";
import { HeroHeading } from "./HeroHeading";
import { HeroInput } from "./HeroInput";
import { HeroSponsored } from "./HeroSponsored";

export function HeroSection() {
  return (
    <div className="w-full max-w-[1440px] py-16 flex-1 flex flex-col gap-36 items-center justify-center ">
      <div className="flex flex-col gap-14 items-center justify-center">
        <HeroHeading />
        <HeroInput />
        <HeroCardLayout />
      </div>
      <HeroSponsored />
    </div>
  );
}
