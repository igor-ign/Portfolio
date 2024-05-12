import React, { ReactNode, useState } from "react";
import { StageContextProps, StageTypes } from "types";

const initialStageContextValue: StageContextProps = {
  stage: 'language',
  setStage: () => {}
};

export const StageContext = React.createContext(initialStageContextValue);

export const StageProvider = ({ children }: { children: ReactNode}) => {
  const [stage, setStage] = useState<StageTypes>('language');

  return (
    <StageContext.Provider value={{ stage, setStage }}>
      {children}
    </StageContext.Provider>
  );
};