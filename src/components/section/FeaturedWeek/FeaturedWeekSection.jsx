import { SectionHeader } from "../SectionHeader";
import { FeaturedWeekMenu } from "./FeaturedWeekMenu";
import { FeaturedWeekSlider } from "./FeaturedWeekSlider";

export function FeaturedWeekSection() {
  const sectionHeaderData = {
    title: "Featured Week Games",
    text: "July 21, 2025 - July 27, 2025 • 5 handpicked game",
  };
  return (
    <div className="max-w-[1440px] w-full flex flex-col gap-8 px-4">
      <SectionHeader data={sectionHeaderData} />

      <FeaturedWeekMenu />
      <FeaturedWeekSlider />
    </div>
  );
}
