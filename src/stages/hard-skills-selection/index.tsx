import { useTranslation } from 'react-i18next'
import { CheckboxForm } from 'components'
import './style.scss'

export default function HardSkillsSelection() {
    const { t } = useTranslation()

    return <main className='hard-skills-selection-container'>
        <h1 className="hard-skills-selection-title">{t('hard-skills-selection-title')}</h1>
        <CheckboxForm 
        options={
            [
                'HTML', 
                'CSS', 
                'Javascript', 
                'ReactJS', 
                'SASS', 
                'Typescript', 
                'NextJS', 
                'CI/CD', 
                'Jenkins', 
                'Docker', 
                'Redux', 
                'Styled Components'
            ]
        } 
        stageToRedirect='result'
        />
    </main>
}