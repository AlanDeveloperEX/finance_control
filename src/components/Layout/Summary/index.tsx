import IncomeImg from "../../../assets/income.svg";
import OutcomeImg from "../../../assets/outcome.svg";
import TotalImg from "../../../assets/total.svg";
import { SummaryContainer } from "./styles";

const Summary = () => {
  return (
    <SummaryContainer>
      <div>
        <header>
          <p>Entrada</p>
          <img src={IncomeImg} alt="income icon" />
        </header>
        <strong>R$ 1.0000</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="outcome icon" />
        </header>
        <strong>R$ 1.0000</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="total icon" />
        </header>
        <strong>R$ 1.0000</strong>
      </div>
    </SummaryContainer>
  );
};

export default Summary;
