import React from "react";

export default function About() {
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
            Hi! 🌻 I’m Jexica, a creative programmer based in NYC 📍. In
            response to participating in online’s #36daysoftype, I created this
            playful website to hold my collection of typographic audio-reactive
            visuals. Hope you enjoyed my experiments 🧚‍♀️ and stay tuned for more!
          </p>
        </div>
      </div>
    </>
  );
}
