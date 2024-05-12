import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navList = [
    {
      label: "Home",
      link: "home",
    },
    {
      label: "Features",
      link: "features",
    },
    {
      label: "Reviews",
      link: "reviews",
    },
    {
      label: "Contact",
      link: "contact",
    },
  ];

  return (
    <nav
      className={cn(
        "sticky left-0 top-0 z-30 w-full bg-background px-6 py-7 font-primary text-black transition-all duration-300 ease-in-out lg:py-8",
        {
          "backdrop-blur-sm": scrollPosition > 100,
        },
      )}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between ">
        <div className=" w-full">
          <a className="flex w-fit items-center gap-2" href="/">
            <img src="/logo.webp" alt="mini_logo" className="w-14" />
            <h1 className="font-secondary text-4xl text-primary">CHROMIA</h1>
          </a>
        </div>
        <ul className="hidden w-full items-center justify-center gap-x-2 lg:flex">
          {navList.map((items) => (
            <li
              key={items.label}
              className="text-shadow group relative overflow-hidden rounded-md px-4 py-2 transition-all duration-200 ease-in-out hover:bg-gray-200"
              onClick={() => {
                const section = document.querySelector(`#${items.link}`);
                section?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "start",
                });
              }}
            >
              <p className="transition-all duration-500 ease-in-out group-hover:-translate-y-[115%]">
                {items.label}
              </p>
              <p className="absolute translate-y-full transition-all duration-500 ease-in-out group-hover:-translate-y-full">
                {items.label}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex w-full items-center justify-end gap-x-3 ">
          <Button className="relative gap-2 rounded-3xl hidden lg:flex" asChild>
            <a href="/download" rel="noopener noreferrer" className="">
              <p className="">Download</p>
              <p className="text-xs opacity-50">&#40;BETA&#41;</p>
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <button className="block lg:hidden">
                <AlignJustify />
              </button>
            </SheetTrigger>
            <SheetContent>
              <div className="p h-full w-full bg-white font-secondary">
                <img
                  src="/logo.webp"
                  alt="Logo"
                  className="mx-auto w-14 grayscale"
                />
                <ul className="mt-10 flex w-full flex-col items-center justify-center gap-y-10">
                  {navList.map((items) => (
                    <a href={items.link} key={items.label}>
                      <li key={items.label}>{items.label}</li>
                    </a>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
