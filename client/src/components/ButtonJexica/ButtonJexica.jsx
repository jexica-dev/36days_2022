import React from "react";
import { Link } from "react-router-dom";

export default function ButtonJexica(props) {
  let styleFont = {
    fontFamily: "ABC Whyte Plus Variable Unlicensed Trial",
  };

  let textColor = "text-red hover:text-white ";
  if (!props.dayMode) {
    textColor = "text-red hover:text-black ";
  }

  let stylesJexica =
    textColor +
    " whitespace-nowrap rounded-full py-3 pr-14 pl-10 border-2 border-red hover:bg-red";

  return (
    <Link to="https://jexica.design/">
      <button
        onClick={props.onClick}
        style={styleFont}
        className={stylesJexica}
      >
        © jexica
      </button>
    </Link>
  );
}
