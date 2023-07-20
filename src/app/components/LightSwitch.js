"use client";

import React, { useState, useEffect } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "universal-cookie";

const LightSwitch = () => {
  const cookies = new Cookies();

  const [icon, setIcon] = useState(faMoon);
  const [text, setText] = useState(" Dark Mode");

  useEffect(() => {
    let themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", function () {
        let htmlClasses = document.querySelector("html").classList;
        if (cookies.get("theme") == "dark") {
          htmlClasses.remove("dark");
          cookies.remove("theme");
          setIcon(faMoon);
          setText(" Dark Mode");
        } else {
          htmlClasses.add("dark");
          cookies.set("theme", "dark");
          setIcon(faSun);
          setText(" Light Mode");
        }
      });
    }

    if (cookies.get("theme") === "dark") {
      document.querySelector("html").classList.add("dark");
      setIcon(faSun);
      setText("Light Mode");
    }
  }, []);

  return (
    <button
      id="themeToggle"
      className=" text-gradient py-1 px-2 rounded inline-flex items-center"
    >
      <FontAwesomeIcon
        id="themeIcon"
        icon={icon}
        className="mr-1 text-purple-500"
      />
      <span className="pl-2">{text}</span>
    </button>
  );
};

export default LightSwitch;
