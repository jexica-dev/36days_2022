import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../HomeButton/HomeButton";
import SideNav from "../SideNav/SideNav";

export default function Layout(props) {
  return (
    <div>
      <SideNav />

      {props.children}
      <div className="p-5 gap-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 bottom-0 left-0 sticky">
        <div>
          <Link to="/">
            <HomeButton>#36daysoftype</HomeButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
