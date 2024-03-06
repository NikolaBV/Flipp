import Button from "./Button";
export default function ButtonContainer({ flipHandleClick }) {
  return (
    <div className="button-container">
      <Button buttonType="Previous"></Button>
      <Button buttonType="Flip" handleClick={flipHandleClick}></Button>
      <Button buttonType="Next"></Button>
    </div>
  );
}
