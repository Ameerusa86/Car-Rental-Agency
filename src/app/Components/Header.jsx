"use client";
import { useContext, useEffect, useState } from "react";

// next image
import Image from "next/image";

// react scroll
import { Link } from "react-scroll";

// Components
import SearchMobile from "./SearchMobile";

// Media Query Hook
import { useMediaQuery } from "react-responsive";

// Icons
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { NavLinks } from "../../../data";
import { SearchContext } from "../context/search";

const Header = () => {
  const { setSearchActive } = useContext(SearchContext);
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    // Header
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
      // Search
      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };
    // Add event listener
    window.addEventListener("scroll", handleScroll);
    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-tranparent shadow-none py-4"
      } fixed w-full max-w-[1920px] transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image
              src={"/icons/logo.svg"}
              width={194}
              height={64}
              alt="Logo"
              priority
            />
          </Link>
          {/* Open Nav Menu */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        {/* Nav */}
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              className="cursor-pointer"
              to={link.url}
              activeClass="active"
              smooth={desktopMode}
              spy={true}
            >
              {link.name}
            </Link>
          ))}
          <Link className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto">
            See all Cars
          </Link>

          <SearchMobile />
        </nav>
      </div>
    </header>
  );
};

export default Header;
