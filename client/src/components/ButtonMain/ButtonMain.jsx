import React from "react";

export default function ButtonMain(props) {
  let textColor = " text-white hover:text-grey";
  if (!props.dayMode) {
    textColor = " text-black hover:text-white";
  }

  return (
    <button onClick={props.onClick} className={props.buttonClass + textColor}>
      {props.children}
    </button>
  );
}
