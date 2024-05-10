import { CheckboxForm } from 'components'
import './style.scss'
import { useTranslation } from 'react-i18next'

export default function HardSkillsSelection() {
    const { t } = useTranslation()

    return <main className='hard-skills-selection-container'>
        <h1 className="hard-skills-selection-title">{t('hard-skills-selection-title')}</h1>
        <CheckboxForm 
        options={['HTML', 'CSS', 'Javascript', 'ReactJS', 'SASS', 'Typescript', 'NextJS', 'CI/CD']} 
        stageToRedirect='result'
        />
    </main>
}