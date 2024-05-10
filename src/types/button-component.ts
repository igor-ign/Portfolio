import { StageTypes } from "./stage-context"

export interface ButtonComponentProps {
    stageToRedirect: StageTypes
    isDisabled: boolean
    alignSelf?: string
    text: string
}