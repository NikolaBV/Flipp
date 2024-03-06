import CardText from "./CardText";
export default function CardContainer({ cards }) {
  return (
    <div className="card-container">
      <CardText cards={cards}></CardText>
    </div>
  );
}
