import React from "react";

export default function ButtonMain(props) {
  return (
    <button onClick={props.onClick} className={props.buttonClass}>
      {props.children}
    </button>
  );
}
