import { useTranslation } from 'react-i18next'
import './style.scss'
import { GitHub, Star, StarBorder } from '@mui/icons-material'
import { TECHNICAL_SKILLS } from '../../constants'
import { SkillLevelTypes } from 'types'

export default function ResultSection() {
    const { t } = useTranslation()

    function getSkillLevelStars(skillLevel: SkillLevelTypes) {
        return {
            'basic-skill-level': <>
            <Star style={{ color: '#8378FD'}} fontSize='large'/> 
            <StarBorder style={{ color: '#8378FD'}} fontSize='large'/> 
            <StarBorder style={{ color: '#8378FD'}} fontSize='large'/>
            </>,
            'intermediate-skill-level': <>
            <Star style={{ color: '#8378FD'}} fontSize='large'/> 
            <Star style={{ color: '#8378FD'}} fontSize='large'/> 
            <StarBorder style={{ color: '#8378FD'}} fontSize='large'/>
            </>,
            'expert-skill-level': <>
            <Star style={{ color: '#8378FD'}} fontSize='large'/> 
            <Star style={{ color: '#8378FD'}} fontSize='large'/> 
            <Star style={{ color: '#8378FD'}} fontSize='large'/>
            </> 
        }[skillLevel]
    }

    function renderSkills() {
        return TECHNICAL_SKILLS.map(({ name, skillLevel, technologyIcon}) => 
        <li key={name} className='skill'>
            <div className="skill-info">
                {technologyIcon}
                <span className="skill-name">{name}</span>
            </div>

            <div className="skill-level">
                <div className="skill-level-stars">{getSkillLevelStars(skillLevel)}</div>
                <span className='skill-level-text'>{t(skillLevel)}</span>
            </div>
        </li>
        )
    }

    return <main className='result-section-container'>
        <p className="result-initial-text">{t('result-stage-initial-text')}</p>
        <article className='result-content'>
            <section className="about-me-section">
                <h1 className="name">Igor Ignácio</h1>
                <span className="role">{t('result-role')}</span>

                <div className="purple-bar"></div>
                <p className="about-me-text">{t('about-me-text')}</p>

                <div className="contact-buttons">
                    <button className="social-media-contact-button">{t('contact-button-text')}</button>
                    <button className='github-button'>
                        <a href="https://github.com/igor-ign" target='_blank' rel='noreferrer' className='github-link'>
                            <GitHub /> Github
                        </a>
                    </button>
                </div>
            </section>

            <section className='career-numbers-section'>
                <div className="career-number">
                    <span className='number-title'>{t('users-affected-title')}</span>
                    <span className='number-text'>{t('users-affected-text')}</span>
                </div>
                <div className="career-number">
                    <span className='number-title'>{t('experience-title')}</span>
                    <span className='number-text'>{t('experience-text')}</span>
                </div>
                <div className="career-number">
                    <span className='number-title'>{t('projects-title')}</span>
                    <span className='number-text'>{t('projects-text')}</span>
                </div>
            </section>

            <section className="technical-skills-section">
                <h2 className="skills-section-title">{t('skill-section-title')}</h2>

                <ul className="skills-list" style={{ listStyle: 'none'}}>
                    {renderSkills()}
                </ul>
            </section>
        </article>
    </main>
}