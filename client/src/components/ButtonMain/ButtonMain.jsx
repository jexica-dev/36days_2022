import React from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonMain(props) {
  let navigate = useNavigate();
  let textColor = " text-white hover:text-grey hover:bg-white";
  if (!props.dayMode) {
    textColor = " text-black hover:text-white hover:bg-black";
  }

  return (
    <button
      onClick={() => navigate(`/letter/${props.letterPage}`)}
      className={props.buttonClass + textColor}
    >
      {props.children}
    </button>
  );
}
