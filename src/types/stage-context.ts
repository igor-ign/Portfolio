import { ReactNode } from "react";

export type StageTypes = 'language' | 'soft-skills' | 'hard-skills' | 'result'

export interface StageContextProps {
    stage: StageTypes;
    setStage: React.Dispatch<React.SetStateAction<StageTypes>>;
}

export type PortfolioStagesConstantProps = {
    [Key in StageTypes]: ReactNode;
};