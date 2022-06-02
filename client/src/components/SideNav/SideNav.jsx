import { React, useState } from "react";
import { Link } from "react-router-dom";

export default function SideNav(props) {
  const [isShown, setIsShown] = useState(true);
  const [isShown1, setIsShown1] = useState(true);

  return (
    <>
      <div className="absolute m-auto right-0 z-100 py-14 px-16 leading-relaxed">
        <ul>
          <Link to="/">
            <li
              onClick={() =>
                props.setDayMode((prevState) => !prevState) +
                console.log(props.dayMode)
              }
              onMouseEnter={() => setIsShown(false)}
              onMouseLeave={() => setIsShown(true)}
            >
              {isShown ? <span class="text-6xl">☀️</span> : "🌖"}
            </li>
          </Link>
          <Link to="/about">
            <li
              onMouseEnter={() => setIsShown1(false)}
              onMouseLeave={() => setIsShown1(true)}
            >
              {isShown1 ? <span class="text-6xl">💭</span> : "💬"}
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
