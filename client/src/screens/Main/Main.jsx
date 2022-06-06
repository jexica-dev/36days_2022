import { React } from "react";
import ButtonJexica from "../../components/ButtonJexica/ButtonJexica";
import ButtonMain from "../../components/ButtonMain/ButtonMain";
// import HomeButton from "../../components/HomeButton/HomeButton";
import * as colorClasses from "../../utils/colorClassesDay";

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
          letterPage={letter}
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
      <div className="w-screen px-32 mx-15 py-10 pb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 h-screen overflow-scroll">
        {letterBtns}
        <div>
          <ButtonJexica dayMode={props.dayMode} />
        </div>
      </div>
    </>
  );
}
