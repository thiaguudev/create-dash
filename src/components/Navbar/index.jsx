import {
  CaseSensitive,
  HelpCircle,
  MoveLeft,
  Palette,
  Pencil,
  Settings,
} from "lucide-react";

import NavbarItem from "./Item";

export default function Navbar() {
  return (
    <nav className="flex flex-col items-center justify-between w-full py-3 h-full">
      <NavbarItem icon={MoveLeft} />

      <div className="flex flex-col gap-5">
        <NavbarItem icon={Pencil} active />
        <NavbarItem icon={Palette} />
        <NavbarItem icon={CaseSensitive} />
        <NavbarItem icon={Settings} />
      </div>

      <NavbarItem icon={HelpCircle} />
    </nav>
  );
}
