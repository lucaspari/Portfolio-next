import React from "react";
import { RocknRoll_One } from "next/font/google";
const rock = RocknRoll_One({ subsets: ["latin"], weight: ["400"] });
export default function Header() {
  return (
    <header className={rock.className + " pb-8 md:text-2xl"}>
      <nav className="text-xl flex md:justify-between justify-center">
        <div className="left flex flex-col md:flex-row md:gap-2 md:text-2xl items-center">
          <span className=" text-wrap">Lucas Fernando Pari</span>
          <span className="text-wrap text-center underline uppercase border border-solid border-black p-1 rounded-md">
            dev
          </span>
        </div>
        <div className="right self-center">
          <ul className="hidden md:flex md:gap-4">
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
