import { React, useState } from "react";
import { Link } from "react-router-dom";

export default function SideNav(props) {
  const [isShown, setIsShown] = useState(true);
  const [darkModeHovered, setDarkModeHovered] = useState(false);

  let dayShown = props.dayMode;
  if (darkModeHovered) {
    dayShown = !dayShown;
  }



  return (
    <>
      <div className="absolute m-auto right-0 z-100 py-14 px-16 leading-relaxed">
        <ul>
          <li
            className="w-24 h-24 cursor-pointer"
            key="a"
            onClick={() => {
              props.setDayMode((prevState) => !prevState);
              setDarkModeHovered(false);
            }}
            onMouseEnter={() => setDarkModeHovered(true)}
            onMouseLeave={() => setDarkModeHovered(false)}
          >
            {dayShown ? <span class="text-6xl">☀️</span> : "🌖"}
          </li>
          <li
            key="b"
            onMouseEnter={() => setIsShown(false)}
            onMouseLeave={() => setIsShown(true)}
            className="w-24 h-24"
          >
            <Link to="/about">
              {isShown ? <span class="text-6xl">💭</span> : "💬"}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
