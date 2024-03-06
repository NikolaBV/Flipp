import CardText from "./CardText";
export default function CardContainer({ cards, isFlipped }) {
  return (
    <div className="card-container">
      <CardText cards={cards} isFlipped={isFlipped}></CardText>
    </div>
  );
}
