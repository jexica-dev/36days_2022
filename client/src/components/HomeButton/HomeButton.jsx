import React from "react";

export default function HomeButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={
        (props.day ? "bg-white text-black" : "bg-black text-white") +
        " rounded-full py-3 px-10 hover:bg-trp hover:text-grey whitespace-nowrap font-medium tracking-widest sticky bottom-0"
      }
    >
      {props.children}
    </button>
  );
}
