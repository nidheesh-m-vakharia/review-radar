"use client";
import ThemeSwitch from "./ThemeSwitch.js";
export default function Navbar() {
  return (
    <nav class="flex justify-center">
      <nav className=" w-3/4 fixed mt-4 flex items-center justify-between p-5 backdrop-blur-lg backdrop-filter bg-grad rounded-3xl bg-gradient-to-tr from-background-200   border-double  border-background-400 border-2  z-50">
        <a href="/" className="text-3xl ml-16">
          R.R.
        </a>
        <ul className="flex [&>*]:mx-4 mr-12  text-xl justify-center items-center ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/form">Radar</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <ThemeSwitch />
        </ul>
      </nav>
    </nav>
  );
}
