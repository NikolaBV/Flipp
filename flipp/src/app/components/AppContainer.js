import CardContainer from "./CardContainer";
import Header from "./Header";
import ButtonContainer from "./ButtonContainer";
export default function AppContainer() {
  return (
    <div className="app">
      <Header></Header>
      <CardContainer></CardContainer>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}
