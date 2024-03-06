import Button from "./Button";
export default function ButtonContainer() {
  return (
    <div className="button-container">
      <Button buttonType="Previous"></Button>
      <Button buttonType="Flip"></Button>
      <Button buttonType="Next"></Button>
    </div>
  );
}
