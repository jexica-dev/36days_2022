import React from "react";

export default function ButtonJexica(props) {
  return (
    <button
      onClick={props.onClick}
      className="rounded-full py-2 px-7 text-black bg-trp border border-primary hover:bg-trp hover:text-primary"
    >
      {props.children}
    </button>
  );
}
