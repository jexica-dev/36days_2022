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

  // let stylesGrid =
  //   "w-screen px-32 mx-15 py-10 pb-40 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-7 h-screen overflow-scroll";

  let stylesGrid =
    " gap-5 pb-40 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 h-screen overflow-scroll overscroll-x-none";

  // let num = "5px";

  // let paddingGrid = {
  //   paddingLeft: num,
  // };

  // const numI = useRef(null);

  for (let letter of alphabet) {
    // if ((i > 2 && i < 6) || (i > 11 && i < 15) || (i > 20 && i < 24)) {
    //   num = i + 7;
    // } else if ((i > 5 && i < 9) || (i > 14 && i < 18) || (i > 23 && i < 26)) {
    //   num = i + 14;
    // }

    let num = 0;
    if (Math.floor((i / 3) % 3) === 0) {
      num += 0;
    } else if (Math.floor((i / 3) % 3) === 1) {
      num += 7;
    } else {
      num += 14;
    }

    let x = " pl-" + num;
    let leftPadding = "sm:pl-3 md:pl-5 lg:" + num + x;
    // md:w-32 lg:w-48"

    let stylesPadding = {
      paddingLeft: num + "0".concat("px"),
      paddingRight: "-80px",
      maxWidth: "200px",

      "@media (max-width: 500px)": {
        paddingLeft: num + "0".concat("px"),
      },
    };

    // if ()

    console.log(leftPadding);
    letterBtns.push(
      <div className={leftPadding} style={stylesPadding} key={letter}>
        <ButtonMain
          // ref={numI}
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
        <div
          style={{
            paddingLeft: "15px",
            paddingRight: "-80px",
            // maxWidth: "200px",
          }}
        >
          <ButtonJexica dayMode={props.dayMode} />
        </div>
      </div>
    </>
  );
}
