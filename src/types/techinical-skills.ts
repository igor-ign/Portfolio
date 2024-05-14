import { ReactNode } from "react"

export type SkillLevelTypes = 'basic-skill-level' | 'intermediate-skill-level' | 'expert-skill-level'

export interface TechnicalSkillsProps {
    name: string
    technologyIcon: ReactNode
    skillLevel: SkillLevelTypes
}