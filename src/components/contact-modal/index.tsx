import { ContactModalProps } from 'types'
import './style.scss'

export default function ContactModal({ isModalOpen, handleClickCloseModal }: ContactModalProps) {
    const modalDisplay = isModalOpen ? 'block' : 'none'
    
    return <div className="modal-container" style={{ display: modalDisplay }}></div>
}