import React from "react";
import ButtonJexica from "../../components/ButtonJexica/ButtonJexica";

export default function About(props) {
  let stylesNote = {
    borderBottom: "1px solid black",
  };

  return (
    <>
      <div className=" w-auto h-3/4 flex py-16">
        <div className="relative text-xl  mx-auto  bg-yellow100 w-96 h-96 border border-black">
          <div
            style={stylesNote}
            className="absolute top-0 right-0 w-full h-5"
          ></div>
          <p className="px-10 py-11 text-left font-medium">
            Hi! 🌻 I’m Jexica, a creative programmer in NYC 📍. Every year I
            ritually participate in online’s #36daysoftype and for 2022's
            collection, I created this playful website to hold my letters of
            typographic audio-reactive visuals. Hope you enjoyed my experiments
            🧚‍♀️ and stay tuned for more!
          </p>
        </div>
      </div>
      <div className="relative h-10">
        <div className="absolute bottom-0 right-16">
          <ButtonJexica />
        </div>
      </div>
    </>
  );
}
