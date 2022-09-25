import logoImg from "../../../assets/logo.svg";
import { ContentLayoutDefault } from "../../../styles/global";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <ContentLayoutDefault>
        <img src={logoImg} alt="logo dt money" />
        <button type="button">Nova Transação</button>
      </ContentLayoutDefault>
    </HeaderContainer>
  );
};

export default Header;
