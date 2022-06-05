import React from "react";

export default function HomeButton(props) {
  let textColor = " text-white bg-black hover:text-black hover:bg-white";
  if (!props.dayMode) {
    textColor = " text-black bg-white hover:text-white hover:bg-black";
  }

  return (
    <button
      onClick={props.onClick}
      className={
        "rounded-full py-3 px-10 whitespace-nowrap font-medium tracking-widest sticky bottom-0" +
        textColor
      }
    >
      {props.children}
    </button>
  );
}
