export default function CardText({ cards, isFlipped }) {
  return (
    <div className="card-text">
      {isFlipped ? <p>{cards[0].definition}</p> : <p>{cards[0].term}</p>}
    </div>
  );
}
