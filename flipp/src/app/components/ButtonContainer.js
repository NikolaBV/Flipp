import Button from "./Button";
export default function ButtonContainer({ flipHandleClick, nextHandleClick }) {
  return (
    <div className="button-container">
      <Button buttonType="Previous"></Button>
      <Button buttonType="Flip" handleClick={flipHandleClick}></Button>
      <Button buttonType="Next" handleClick={nextHandleClick}></Button>
    </div>
  );
}
