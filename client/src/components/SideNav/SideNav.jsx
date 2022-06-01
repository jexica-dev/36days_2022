import { React, useState } from "react";
import { Link } from "react-router-dom";

export default function SideNav() {
  // const [dayMode, setDayMode] = useState(true);
  const [isShown, setIsShown] = useState(true);
  const [isShown1, setIsShown1] = useState(true);
  const [open, setOpen] = useState(false);

  const handleNight = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="absolute m-auto right-0 z-100 py-14 px-16 leading-relaxed">
        <ul>
          <Link to="/">
            <li
              onClick={handleNight}
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
