import { useState } from "react";
import { navbarData } from "../../data/Navbar";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import Logo from "../Logo/Logo";
import Sidebar from "../Sidebar/Sidebar";
import LogoImage from "./../../assets/logo.png";
import NavMenu from "./NavMenu";
import MenuIcon from "./../../assets/menu.svg";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className="flex h-[60px] items-center justify-between bg-[#6a5aad] px-[60px] text-white">
      <Logo src={LogoImage} to="logo" styles="h-[30px]" />
      <NavMenu data={navbarData} />
      <div className="hidden lg:block">
        <LanguageSelector />
      </div>
      <div
        className="menu cursor-pointer rounded-md bg-white p-2 lg:hidden"
        onClick={() => setOpen(true)}
      >
        <img src={MenuIcon} alt="menu icon" />
      </div>
      <Sidebar setOpen={setOpen} open={open} />
    </nav>
  );
}
