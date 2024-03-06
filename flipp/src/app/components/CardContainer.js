import CardText from "./CardText";
export default function CardContainer({ cards, isFlipped, currentCard }) {
  return (
    <div className="card-container">
      <CardText
        cards={cards}
        isFlipped={isFlipped}
        currentCard={currentCard}
      ></CardText>
    </div>
  );
}
