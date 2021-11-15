import logoImg from "../../assets/logo.png";
import searchSVG from "../../assets/search.svg";
import addSVG from "../../assets/add.svg";
import { Buttons, Container, Content, Input, Inputs } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="my snippet" />
        <Inputs>
          <Input  placeholder="Language" />
          <Input  placeholder="Title" />
        </Inputs>
        <Buttons>
          <img src={searchSVG} alt="Pesquisar" />
          <img src={addSVG} alt="Adicionar" />
        </Buttons>
      </Content>
    </Container>
  );
}
