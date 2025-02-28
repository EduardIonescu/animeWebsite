"use client";

import { useSearchData } from "@/hooks/useSearchData";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SearchBarResults from "./searchBarResults";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  function toggleMenuOpen() {
    setSearchOpen(false);
    setMenuOpen((prev) => !prev);
  }

  function toggleSearchOpen() {
    setSearchOpen((prev) => !prev);
    setMenuOpen(false);
  }

  return (
    <header
      id="top"
      className="fixed top-0 h-16 w-full bg-darkBlue dark:bg-slate-900 shadow-md z-50"
    >
      <nav className={`z-50 `}>
        <div
          className="sm:w-[34rem] md:w-[45rem] lg:w-[60rem] xl:w-[75rem] flex 
        items-center justify-between h-16 mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="ml-2 text-white font-bold text-xl">
                AnimeSun
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <Links pathname={pathname} mobile={false} />

          {/* Search and Settings */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <SearchBar open={searchOpen} mobile={false} />
            </div>

            <DarkMode mobile={false} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkMode />

            <button
              onClick={toggleSearchOpen}
              className="p-2 rounded-full text-gray-300 hover:text-white 
                hover:bg-slate-800 transition-colors"
              aria-label="Toggle search"
            >
              <NavImage src="/icons/search-icon.svg" />
            </button>
            <button
              onClick={toggleMenuOpen}
              className="p-2 rounded-full text-gray-300 hover:text-white 
                hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              <NavImage
                src={menuOpen ? "/icons/x-icon.svg" : "/icons/menu-icon.svg"}
              />
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        <SearchBar open={searchOpen} />

        {/* Mobile menu */}
        <Links menuOpen={menuOpen} />
      </nav>
    </header>
  );
}

function NavImage({ src, dark = false }: { src: string; dark?: boolean }) {
  return (
    <div className="relative w-5 h-5">
      <Image
        src={src}
        fill
        sizes="100%"
        alt=""
        aria-hidden
        className={dark ? "" : "invert"}
      />
    </div>
  );
}

const links = [
  { name: "Home", href: "/", src: "/icons/house-icon.svg" },
  { name: "List", href: "/list", src: "/icons/list-icon.svg" },
  { name: "Random", href: "/random", src: "/icons/random-icon.svg" },
];
function Links({
  pathname,
  menuOpen,
  mobile = true,
}: {
  pathname?: string;
  menuOpen?: boolean;
  mobile?: boolean;
}) {
  if (mobile) {
    return (
      <div
        className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-slate-800`}
      >
        <div
          className="px-2 pt-2 pb-3 space-y-1 sm:w-[34rem] md:w-[45rem] 
  lg:w-[60rem] xl:w-[75rem] mx-auto sm:px-6 lg:px-8"
        >
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="text-gray-300 hover:text-white px-3 py-2 
      rounded-md text-base font-medium border-l-4 border-transparent 
      hover:border-yellow-400 transition-all flex gap-2 items-center"
            >
              <NavImage src={link.src} />

              {link.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center justify-center flex-1 gap-2 xl:gap-4">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className="text-gray-300 hover:text-white px-3 py-2 text-sm 
    xl:text-lg font-semibold relative group"
        >
          {link.name}
          <span
            className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 ${
              pathname === link.href ? "scale-x-100" : "scale-x-0"
            } 
    group-hover:scale-x-100 transition-transform duration-200 transform`}
          />
        </Link>
      ))}
    </div>
  );
}

function DarkMode({ mobile = true }: { mobile?: boolean }) {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(theme === "light" ? "dark" : "light");
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  if (mobile) {
    return (
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full text-gray-300 hover:text-white 
                hover:bg-slate-800 transition-colors"
        aria-label="Toggle dark mode"
      >
        <NavImage
          src={isDarkMode ? "/icons/sun-icon.svg" : "/icons/moon-icon.svg"}
        />
      </button>
    );
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full text-gray-300 hover:text-white 
      hover:bg-slate-800 transition-colors"
      aria-label="Toggle dark mode"
    >
      <NavImage
        src={isDarkMode ? "/icons/sun-icon.svg" : "/icons/moon-icon.svg"}
      />
    </button>
  );
}

function SearchBar({
  open,
  mobile = true,
}: {
  open: boolean;
  mobile?: boolean;
}) {
  const [searchIsActive, setSearchIsActive] = useState<boolean>(false);
  const { query, handleChange, resultsData, isLoading } =
    useSearchData(setSearchIsActive);
  const searchRef = useRef<HTMLInputElement>(null);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  if (mobile) {
    return (
      <div className={`md:hidden ${open ? "block" : "hidden"} bg-slate-800`}>
        <div
          className="px-4 py-3 sm:w-[34rem] md:w-[45rem] 
          lg:w-[60rem] xl:w-[75rem] mx-auto sm:px-6 lg:px-8"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <NavImage src="/icons/search-icon.svg" dark={true} />
            </div>
            <input
              type="text"
              placeholder="Search anime..."
              maxLength={32}
              onChange={handleChange}
              ref={(ref) => {
                if (inputs.current) inputs.current.push(ref);
              }}
              className="bg-white text-slate-800 pl-10 pr-4 py-2 rounded-md cursor-pointer
                text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full transition-all"
              autoFocus
            />
          </div>
        </div>
        {query && searchIsActive && (
          <SearchBarResults
            resultsData={resultsData}
            setSearchIsActive={setSearchIsActive}
            searchRef={searchRef}
            isLoading={isLoading}
          />
        )}
      </div>
    );
  }

  return (
    <article>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <NavImage src={"/icons/search-icon.svg"} dark={true} />
      </div>
      <input
        type="text"
        placeholder="Search anime..."
        maxLength={32}
        onChange={handleChange}
        ref={(ref) => {
          searchRef.current = ref;
          if (inputs.current) inputs.current.push(ref);
        }}
        className="bg-white text-slate-800 pl-10 pr-4 py-2 rounded-md  text-sm cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-yellow-400 w-64 xl:w-96 transition-all"
      />
      {query && searchIsActive && (
        <SearchBarResults
          resultsData={resultsData}
          setSearchIsActive={setSearchIsActive}
          searchRef={searchRef}
          isLoading={isLoading}
        />
      )}
    </article>
  );
}
