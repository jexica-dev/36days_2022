import React from "react";
import { Link } from "react-router-dom";

export default function ButtonJexica(props) {
  let style = {
    fontFamily: "ABC Whyte Plus Variable Unlicensed Trial",
  };

  let textColor = "hover:text-white ";
  if (!props.dayMode) {
    textColor = "text-white hover:text-black ";
  }

  let fontColor =
    textColor +
    "whitespace-nowrap rounded-full py-3 pr-14 pl-10 border-2 border-red hover:bg-red";

  return (
    <Link to="https://jexica.design/">
      <button onClick={props.onClick} style={style} className={fontColor}>
        © jexica
      </button>
    </Link>
  );
}
