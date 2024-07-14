"use client";
import ThemeSwitch from "./ThemeSwitch.js";
import { useState, useLayoutEffect } from "react";

export default function Navbar() {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Radar", link: "/form" },
    { name: "About", link: "/about" },
  ];
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  useLayoutEffect(() => {
    function updateSize() {
      setIsMobile(window.innerWidth <= 690);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  });

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMounted && (
        <nav className="flex justify-center">
          {isMobile ? (
            <>
              <nav
                className=" w-11/12 fixed mt-4 flex items-center justify-between p-5 backdrop-blur-md backdrop-filter bg-grad rounded-xl bg-gradient-to-tr from-background-200   border-double  border-background-400 border-2  z-50
      "
              >
                <a href="/" className="text-xl ml-5">
                  R.R.
                </a>

                <div className="flex items-center justify-center">
                  <ThemeSwitch />
                  <button onClick={handleClick} className="text-3xl ml-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </button>
                </div>
              </nav>
              <div
                className={
                  isMenuOpen
                    ? "fixed z-50 h-[100vh] w-[100vw] flex justify-center items-center align-middle "
                    : "hidden"
                }
              >
                <ul className="flex flex-col items-center justify-evenly backdrop-blur-lg w-screen  h-full bg-gradient-to-br from-accent-200">
                  <button
                    onClick={handleClick}
                    className="fixed top-7 right-7 text-5xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-9 w-9"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  {menuItems.map((item) => (
                    <li key={item.name} className="mx-4">
                      <a
                        href={item.link}
                        className="hover:text-primary-900 text-primary-950 text-3xl"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <nav
              className=" w-3/4 fixed mt-4 flex items-center justify-between p-5 backdrop-blur-md backdrop-filter bg-grad rounded-3xl bg-gradient-to-tr from-background-200   border-double  border-background-400 border-2  z-50
        hover:shadow-lg
        hover:scale-[1.01]
        hover:backdrop-blur-xl
        hover:border-background-500
        transition duration-500 ease-in-out
      "
            >
              <a href="/" className="text-3xl ml-16">
                R.R.
              </a>
              <ul className="flex [&>*]:mx-4 mr-12  text-xl justify-center items-center ">
                {menuItems.map((item) => (
                  <li key={item.name} className="mx-4">
                    <a
                      href={item.link}
                      className="hover:text-primary-900 text-primary-950"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <ThemeSwitch />
              </ul>
            </nav>
          )}
        </nav>
      )}
    </>
  );
}
