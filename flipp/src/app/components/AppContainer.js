import CardContainer from "./CardContainer";
import Header from "./Header";
import ButtonContainer from "./ButtonContainer";
export default function AppContainer() {
  const cards = [
    {
      term: "PC",
      definition: "Personal computer",
    },
    {
      term: "Ivana",
      definition: "My bebi",
    },
  ];
  return (
    <div className="app">
      <Header></Header>
      <CardContainer cards={cards}></CardContainer>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}
