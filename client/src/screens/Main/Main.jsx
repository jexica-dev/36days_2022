import { React } from "react";
import ButtonJexica from "../../components/ButtonJexica/ButtonJexica";
import ButtonMain from "../../components/ButtonMain/ButtonMain";
// import HomeButton from "../../components/HomeButton/HomeButton";
import * as colorClasses from "../../utils/colorClassesDay";

export default function Main(props) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let letterBtns = [];
  let i = 0;

  // let stylesGrid =
  // "w-screen px-32 mx-15 py-10 pb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 h-screen overflow-scroll";

  let stylesGrid =
    " gap-5 pb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-screen overflow-scroll overscroll-x-none";

  for (let letter of alphabet) {
    let num = 0;
    if (Math.floor((i / 3) % 3) === 0) {
      num += 0;
    } else if (Math.floor((i / 3) % 3) === 1) {
      num += 7;
    } else {
      num += 14;
    }

    let stylesPadding = {
      paddingLeft: num + "0".concat("px"),
      paddingRight: "-80px",
      maxWidth: "200px",
      "@media (maxWidth: 768px)": {
        paddingLeft: "0px !important",
        paddingRight: "0px !important",
      },
    };

    letterBtns.push(
      <div style={stylesPadding} key={letter}>
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
      <div className={stylesGrid}>
        {letterBtns}
        <div>
          <ButtonJexica dayMode={props.dayMode} />
        </div>
      </div>
    </>
  );
}
