import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { StagesHeader } from "components";
import { PORTFOLIO_STAGES } from "./constants";
import { StageContext } from "context";
import './app.scss'

function App() {
  const { stage } = useContext(StageContext)
  const { t } = useTranslation()

  document.title = t('portfolio-title')

  return (
    <div className="app-container">
      <div className="app-content">
        <StagesHeader />
        {PORTFOLIO_STAGES[stage as keyof typeof PORTFOLIO_STAGES]}
      </div>
    </div>
  );
}

export default App;
