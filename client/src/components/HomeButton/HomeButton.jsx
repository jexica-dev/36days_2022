import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function HomeButton(props) {
  const media = useMediaQuery({ query: "(max-width: 600px)" });
  let textColor = " text-white bg-black hover:text-black hover:bg-white";
  if (!props.dayMode) {
    textColor = " text-black bg-white hover:text-white hover:bg-black";
  }

  let titleText = "#36daysoftype";

  if (media) {
    titleText = "36days";
  }

  return (
    <>
      <Link to="/">
        <button
          onClick={props.onClick}
          className={
            "rounded-full py-3 px-10 whitespace-nowrap font-medium tracking-widest sticky bottom-0" +
            textColor
          }
        >
          {titleText}
        </button>
      </Link>
    </>
  );
}
