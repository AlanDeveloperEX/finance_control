import { Summary } from "../../components";
import { ContentLayoutDefault } from "../../styles/global";
import { DashboardContainer } from "./styles";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <ContentLayoutDefault>
        <Summary />
      </ContentLayoutDefault>
      ;
    </DashboardContainer>
  );
};

export default Dashboard;
