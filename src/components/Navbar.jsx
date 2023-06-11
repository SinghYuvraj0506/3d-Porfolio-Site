import React, { useRef, useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(""); // Knows where we are
  const [toggle, setToggle] = useState(false);

  const navRef = useRef();

  const handleScroll = () => {
    if (window.scrollY > 25) {
      navRef.current.classList.add("bg-primary");
      navRef.current.classList.remove("bg-quaternary");
    } else {
      navRef.current.classList.add("bg-quaternary");
      navRef.current.classList.remove("bg-primary");
    }
  };

  document.addEventListener("scroll", handleScroll);

  return (
    <nav
      ref={navRef}
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center h-16 max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="sm:w-24 sm:h-24 w-16 h-16 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Yuvraj Singh
          </p>
          <span className="sm:block hidden">| Full Stack Developer</span>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks?.map((e) => {
            return (
              <li
                key={e?.id ?? e?.link}
                className={`${
                  active === e?.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(e?.title);
                }}
              >
                {e?.id ? (
                      <a href={`#${e?.id}`}>{e?.title}</a>
                    ) : (
                      <a href={e?.link} target="_blank">{e?.title}</a>
                    )}
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navLinks?.map((e) => {
                return (
                  <li
                    key={e?.id ?? e?.link}
                    className={`${
                      active === e?.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(e?.title);
                    }}
                  >
                    {e?.id ? (
                      <a href={`#${e?.id}`}>{e?.title}</a>
                    ) : (
                      <a href={e?.link} target="_blank">{e?.title}</a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
