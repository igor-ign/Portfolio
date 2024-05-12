import { useTranslation } from 'react-i18next'
import './style.scss'
import { GitHub } from '@mui/icons-material'

export default function ResultSection() {
    const { t } = useTranslation()

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
        </article>
    </main>
}