import { FaSearch } from "react-icons/fa";

export function HeroInput() {
  return (
    <div className="relative w-96">
      <FaSearch className="absolute text-hover-2 top-6.5 left-4" size={20} />
      <input
        type="text"
        className="rounded-2xl py-6 pl-12 bg-input placeholder:text-hover-2 w-full"
        placeholder="Search for games, studios, genres..."
      />
    </div>
  );
}
