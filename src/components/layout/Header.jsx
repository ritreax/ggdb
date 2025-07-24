import { Button } from "../ui/Button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between max-w-[1440px] py-3 ">
      <div className="flex items-center gap-4">
        <a href="#">
          <h1 className="font-black text-2xl">GGDB</h1>
        </a>
        <ThemeSwitcher />
      </div>
      <div className="flex gap-2">
        <Button color="Transparent">Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
}
