"use client";

import React, { useEffect, useState } from "react";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "universal-cookie";

const LightSwitch = () => {
  const cookies = new Cookies();
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState(faMoon);
  const [text, setText] = useState("Off");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", function () {
        let htmlClasses = document.querySelector("html").classList;
        if (cookies.get("theme") == "dark") {
          htmlClasses.remove("dark");
          cookies.remove("theme");
          setIcon(faMoon);
          setText("On");
        } else {
          htmlClasses.add("dark");
          cookies.set("theme", "dark");
          setIcon(faSun);
          setText("Off");
        }
      });
    }

    if (cookies.get("theme") === "dark") {
      document.querySelector("html").classList.add("dark");
      setIcon(faSun);
      setText("Switch to Light Mode");
    }
  }, []);

  return (
    <div className="container mx-auto px-4 flex justify-between items-center text-base">
      <button
        id="themeToggle"
        className=" text-gradient py-1 px-2 rounded inline-flex items-center"
      >
        <FontAwesomeIcon
          id="themeIcon"
          icon={icon}
          className="mr-2 text-purple-500"
        />
        <span className="pl-1">{text}</span>
      </button>
    </div>
  );
};

export default LightSwitch;
