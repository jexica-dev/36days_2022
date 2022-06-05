import React from "react";

export default function LetterContainer(props) {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden">
        <div className="w-screen h-screen">
          {/* <div className="absolute w-full h-full"></div> */}
          <video
            src={`../_${props.letterPage}.mp4`}
            type="video/mp4"
            height="100%"
            // width="100%"
            className="m-auto"
            title="video"
            autoPlay
            loop
          ></video>
        </div>
      </div>
    </>
  );
}
