import { useTranslation } from 'react-i18next'
import { CheckboxForm } from 'components'
import './style.scss'

export default function SoftSkillsSelection() {
    const { t, i18n } = useTranslation()

    const SOFT_SKILLS_OPTIONS = {
        en: [
            'Adaptability', 
            'Resiliency', 
            'Flexibility', 
            'Strong Time Management', 
            'Teamworker', 
            'Creativity', 
            'Emotional intelligence'
        ],
        pt: [
            'Adaptabilidade', 
            'Resiliência', 
            'Flexibilidade', 
            'Bom Gerenciamento de Tempo', 
            'Colaboração Eficaz', 
            'Criatividade', 
            'Inteligência Emocional'
        ]
    }

    return <main className='soft-skills-selection-container'>
        <h1 className="soft-skills-selection-title">{t('soft-skills-selection-title')}</h1>
        <CheckboxForm 
        options={SOFT_SKILLS_OPTIONS[i18n.language as keyof typeof SOFT_SKILLS_OPTIONS]} 
        sectionToRedirect='hard-skills'
        />
    </main>
}