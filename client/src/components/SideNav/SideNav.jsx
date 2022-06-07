import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Hamburger from "hamburger-react";

export default function SideNav(props) {
  const screen = useMediaQuery({ query: "(max-width: 600px)" });
  const media = useMediaQuery({ query: "(max-width: 600px)" });

  const [isShown, setIsShown] = useState(true);
  const [darkModeHovered, setDarkModeHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  let dayShown = props.dayMode;
  if (darkModeHovered) {
    dayShown = !dayShown;
  }

  let tailwindClasses =
    "absolute m-auto right-0 z-100 py-14 px-16 leading-relaxed";

  let stylesContainer = {
    // adding styles for hamburger menu here
    // https://hamburger-react.netlify.app/
  };

  if (media) {
    tailwindClasses = {};
  }

  return (
    <>
      <div className={tailwindClasses} styles={stylesContainer}>
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
