export default function CardText({ cards }) {
  return (
    <div className="card-text">
      <p>{cards[1].definition}</p>
    </div>
  );
}
