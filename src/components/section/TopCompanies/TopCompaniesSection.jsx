import { SectionHeader } from "../SectionHeader";
import { TopCompaniesSlider } from "./TopCompaniesSlider";

const sectionHeaderData = {
  title: "Top Companies",
  text: "Leading game developers and publishers shaping the industry",
};

export function TopCompaniesSection() {
  return (
    <div className="max-w-[1440px] w-full flex flex-col gap-8 px-4">
      <SectionHeader data={sectionHeaderData} />
      <TopCompaniesSlider />
    </div>
  );
}
