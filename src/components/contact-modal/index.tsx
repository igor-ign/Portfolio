import { useTranslation } from 'react-i18next'
import { Close, Email, LinkedIn } from '@mui/icons-material'
import { Toast } from 'components'
import { ContactModalProps } from 'types'
import './style.scss'
import { useState } from 'react'

export default function ContactModal({ isModalOpen, handleClickCloseModal }: ContactModalProps) {
    const [isToastOpen, setIsToastOpen] = useState<boolean>(false)

    const { t } = useTranslation()

    const modalDisplay = isModalOpen ? 'flex' : 'none'

    function handleClickEmailButton() {
        navigator.clipboard.writeText('igor.ignacio.contact@gmail.com')
        setIsToastOpen(true)
    }

    return <div className="modal-container" style={{ display: modalDisplay }}>
        <Toast handleCloseToast={() => setIsToastOpen(false)} isToastOpen={isToastOpen} message={t('copy-email-toast-text')}/>
        <div className="modal-content">
            <button className="close-modal-button" onClick={handleClickCloseModal}>
                <Close style={{ alignSelf: 'flex-end', color: 'white'}}/>
            </button>

            <span className="modal-title">
                {t('contact-modal-title')}
            </span>
            <p className="modal-text">
                {t('contact-modal-text')}
            </p>
            <ul className="communication-links-list">
                <li className="communication-link">
                    <a 
                    href="https://www.linkedin.com/in/igor-ignacio/" 
                    target='_blank' 
                    rel="noreferrer"
                    className='linkedin-link'
                    >
                        <LinkedIn /> LinkedIn
                    </a>
                </li>
                <li className="communication-link">
                    <button 
                    className='email-button' 
                    onClick={handleClickEmailButton}
                    >
                        <Email /> E-mail
                    </button>
                </li>
            </ul>
        </div>
    </div>
}