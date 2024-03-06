export default function Button({ buttonType }) {
  return (
    <div className={`button ${buttonType}`}>
      <button>{buttonType}</button>
    </div>
  );
}
