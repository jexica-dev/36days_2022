import React from "react";

export default function LetterContainer(props) {
  return (
    <>
      <div className="w-full h-full flex">
        <div className="flex-auto">
          <iframe
            autoplay="0"
            src={`../_${props.letterPage}.mp4`}
            type="video/mp4"
            height="700"
            width="700"
            title="video"
            controls
          ></iframe>
        </div>
      </div>
    </>
  );
}
