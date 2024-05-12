import React, { ReactNode, useState } from "react";
import { StageContextProps, StageTypes } from "types";

const initialStageContextValue: StageContextProps = {
  stage: 'result',
  setStage: () => {}
};

export const StageContext = React.createContext(initialStageContextValue);

export const StageProvider = ({ children }: { children: ReactNode}) => {
  const [stage, setStage] = useState<StageTypes>('result');

  return (
    <StageContext.Provider value={{ stage, setStage }}>
      {children}
    </StageContext.Provider>
  );
};