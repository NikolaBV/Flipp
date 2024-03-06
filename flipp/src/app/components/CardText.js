export default function CardText({ cards, isFlipped, currentCard }) {
  return (
    <div className="card-text">
      {isFlipped ? (
        <p>{cards[currentCard].definition}</p>
      ) : (
        <p>{cards[currentCard].term}</p>
      )}
    </div>
  );
}
