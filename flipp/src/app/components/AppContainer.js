"use client";
import CardContainer from "./CardContainer";
import Header from "./Header";
import ButtonContainer from "./ButtonContainer";
import { useState } from "react";
export default function AppContainer() {
  const [flip, setFlip] = useState(false);

  function flipHandleClick() {
    setFlip(!flip);
    console.log(flip);
  }
  const cards = [
    {
      term: "PC",
      definition: "Personal computer",
    },
    {
      term: "Ivana",
      definition: "My bebi",
    },
  ];
  return (
    <div className="app">
      <Header></Header>
      <CardContainer cards={cards} isFlipped={flip}></CardContainer>
      <ButtonContainer flipHandleClick={flipHandleClick}></ButtonContainer>
    </div>
  );
}
