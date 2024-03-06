export default function Button({ buttonType, handleClick }) {
  return (
    <div className={`button ${buttonType}`}>
      <button onClick={handleClick}>{buttonType}</button>
    </div>
  );
}
