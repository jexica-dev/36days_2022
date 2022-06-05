import React from "react";

export default function HomeButton(props) {
  let textColor = " text-white bg-black hover:text-grey";
  if (!props.dayMode) {
    textColor = " text-black bg-white hover:text-white";
  }

  return (
    <button
      onClick={props.onClick}
      className={
        "rounded-full py-3 px-10 hover:bg-trp whitespace-nowrap font-medium tracking-widest sticky bottom-0" +
        textColor
      }
    >
      {props.children}
    </button>
  );
}
