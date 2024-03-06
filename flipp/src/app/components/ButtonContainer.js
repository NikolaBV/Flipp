import Button from "./Button";
export default function ButtonContainer({
  flipHandleClick,
  nextHandleClick,
  previousHandleClick,
}) {
  return (
    <div className="button-container">
      <Button buttonType="Previous" handleClick={previousHandleClick}></Button>
      <Button buttonType="Flip" handleClick={flipHandleClick}></Button>
      <Button buttonType="Next" handleClick={nextHandleClick}></Button>
    </div>
  );
}
