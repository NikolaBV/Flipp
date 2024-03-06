"use client";
import CardContainer from "./CardContainer";
import Header from "./Header";
import ButtonContainer from "./ButtonContainer";
import { useState } from "react";
export default function AppContainer() {
  const [flip, setFlip] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  function flipHandleClick() {
    setFlip(!flip);
    console.log(flip);
  }

  function nextHandleClick() {
    if (currentCard == cards.length - 1) {
      setCurrentCard(0);
    } else {
      setCurrentCard(currentCard + 1);
    }
    console.log(currentCard);
  }
  function previousHandleClick() {
    if (currentCard == 0) {
      setCurrentCard(cards.length - 1);
    } else {
      setCurrentCard(currentCard - 1);
    }
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
    {
      term: "Teodora",
      definition: "Pishkata",
    },
  ];
  return (
    <div className="app">
      <Header></Header>
      <CardContainer
        cards={cards}
        isFlipped={flip}
        currentCard={currentCard}
      ></CardContainer>
      <ButtonContainer
        flipHandleClick={flipHandleClick}
        nextHandleClick={nextHandleClick}
        previousHandleClick={previousHandleClick}
      ></ButtonContainer>
    </div>
  );
}
