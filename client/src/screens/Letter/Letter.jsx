import React from "react";
import { useParams } from "react-router-dom";
import LetterContainer from "../../components/LetterContainer/LetterContainer";

export default function Letter(props) {
  let { letter_id } = useParams();
  return (
    <>
      <LetterContainer
        letterPage={letter_id}
      />
    </>
  );
}
