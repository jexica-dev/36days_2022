import { React, useState } from "react";
import { Link } from "react-router-dom";

export default function SideNav(props) {
  const [isShown, setIsShown] = useState(true);
  const [isShown1, setIsShown1] = useState(true);
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
            key="a"
            onClick={() => {
              props.setDayMode((prevState) => !prevState);
              setDarkModeHovered(false);
            }}
            onMouseEnter={() => setDarkModeHovered(true)}
            onMouseLeave={() => setDarkModeHovered(false)}
          >
            <Link to="">
              {dayShown ? <span class="text-6xl">☀️</span> : "🌖"}
            </Link>
          </li>
          <li
            key="b"
            onMouseEnter={() => setIsShown1(false)}
            onMouseLeave={() => setIsShown1(true)}
          >
            <Link to="/about">
              {isShown1 ? <span class="text-6xl">💭</span> : "💬"}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
