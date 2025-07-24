import { SectionHeader } from "../SectionHeader";
import { MostVisitedSlider } from "./MostVisitedSlider";

const sectionHeaderData = {
  title: "Most Visited Credits",
  text: "This week's trending game industry professionals",
};

export function MostVisitedSection() {
  return (
    <div className="max-w-[1440px] w-full flex flex-col gap-8 px-4">
      <SectionHeader data={sectionHeaderData} />
      <MostVisitedSlider />
    </div>
  );
}
