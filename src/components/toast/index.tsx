import { useEffect } from 'react'
import './style.scss'

export default function Toast({ message, isToastOpen, handleCloseToast }: { 
    message: string
    isToastOpen: boolean
    handleCloseToast: () => void
}) {
    const toastDisplay = isToastOpen ? 'block' : 'none'

    useEffect(() => {
        if (isToastOpen) {
            setTimeout(handleCloseToast, 4000)
        }
    }, [isToastOpen, handleCloseToast])

    return <div className="toast-container" style={{ display: toastDisplay}}>{message}</div>
}