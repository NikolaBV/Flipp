import CardContainer from "./CardContainer";
import Header from "./Header";
import Button from "./Button";
export default function AppContainer() {
  return (
    <div className="App">
      <Header></Header>
      <CardContainer></CardContainer>
      <Button buttonType="flip"></Button>
      <Button buttonType="next"></Button>
      <Button buttonType="previous"></Button>
    </div>
  );
}
