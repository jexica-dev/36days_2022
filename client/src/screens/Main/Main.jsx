import { React } from "react";
import ButtonMain from "../../components/ButtonMain/ButtonMain";
// import HomeButton from "../../components/HomeButton/HomeButton";
import * as colorClasses from "../../utils/colorClassesDay";
// import useEffect from "react";

export default function Main(props) {
  // let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reverse().join("");
  // let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reverse().join("");
  // let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let letterBtns = [];
  let i = 0;

  for (let letter of alphabet) {
    letterBtns.push(
      <div key={letter}>
        <ButtonMain
          dayMode={props.dayMode}
          buttonClass={
            colorClasses.buttonClasses[i++ % colorClasses.buttonClasses.length]
          }
        >
          Letter {letter}
        </ButtonMain>
      </div>
    );
  }
  return (
    <>
      <div className="px-10 mx-15 py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {letterBtns}
      </div>
    </>
  );
}
