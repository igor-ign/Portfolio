import { useTranslation } from 'react-i18next'
import { Language } from '@mui/icons-material'
import { IMAGES } from 'assets'
import { Button } from 'components'
import './style.scss'

export default function LanguageSelection() {
    const { t, i18n } = useTranslation()
    
    function getLanguageSelectionButtonClassname(buttonLanguage: 'pt' | 'en') {
        const currentLanguage = i18n.language

        const isButtonLanguageSelected = buttonLanguage === currentLanguage
        const languageSelectionButtonClassname = isButtonLanguageSelected ? 'language-selection-button selected' : 'language-selection-button'

        return languageSelectionButtonClassname
    }

    return <main className='language-selection-container'>
        <div className="language-selection-header">
            <Language style={{ fontSize: '3rem', color: 'white'}}/> 
            <h1 className='language-selection-title'>
                {t('language-selection-title')}
            </h1>
        </div>
        <div className="language-selection-content">
            <button className={getLanguageSelectionButtonClassname('pt')} onClick={() => i18n.changeLanguage('pt')}>
                <img src={IMAGES.BRAZIL_FLAG.image} alt={IMAGES.BRAZIL_FLAG.alt} />
                Português
                <span className='country-name'>Brasil</span>
            </button>
            <button className={getLanguageSelectionButtonClassname('en')} onClick={() => i18n.changeLanguage('en')}>
                <img src={IMAGES.USA_FLAG.image} alt={IMAGES.USA_FLAG.alt} />
                English 
                <span className='country-name'>United States</span>
            </button>
        </div>

        <Button isDisabled={false} stageToRedirect='soft-skills' text={t('next-button-text')}/>
    </main>
}