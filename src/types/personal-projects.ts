import { ReactNode } from "react"

export interface PersonalProjectDescriptionProps {
    pt: string
    en: string
}

export interface PersonalProjectProps {
    name: string
    images: ReactNode[]
    description: PersonalProjectDescriptionProps
    githubLink: string
}