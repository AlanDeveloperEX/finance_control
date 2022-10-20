import { Summary } from "../../components";
import { TransactionsTable } from "../../components";
import { ContentLayoutDefault } from "../../styles/global";
import { DashboardContainer } from "./styles";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <ContentLayoutDefault>
        <Summary />
        <TransactionsTable />
      </ContentLayoutDefault>
    </DashboardContainer>
  );
};

export default Dashboard;
