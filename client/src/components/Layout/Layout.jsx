import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../HomeButton/HomeButton";
import SideNav from "../SideNav/SideNav";

export default function Layout(props) {
  let bgColor = "";
  if (!props.dayMode) {
    bgColor = "bg-black ";
  }

  return (
    <div className={bgColor + "w-screen h-screen overflow-hidden relative"}>
      <SideNav dayMode={props.dayMode} setDayMode={props.setDayMode} />

      {props.children}

      <div className=" max-w-fit p-5 gap-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 bottom-0 left-5 sticky">
        <div>
          <Link to="/">
            <HomeButton dayMode={props.dayMode} setDayMode={props.setDayMode}>
              #36daysoftype
            </HomeButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
