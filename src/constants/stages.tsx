import { 
    HardSkillsSelection, 
    LanguageSelection, 
    ResultSection, 
    SoftSkillsSelection 
} from "stages";
import { PortfolioStagesConstantProps } from "types";


export const PORTIFOLIO_STAGES: PortfolioStagesConstantProps = {
    language: <LanguageSelection />,
    "soft-skills": <SoftSkillsSelection />,
    "hard-skills": <HardSkillsSelection />,
    result: <ResultSection />
}