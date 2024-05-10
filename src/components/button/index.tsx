import { useContext } from 'react';
import { StageContext } from 'context';
import { ButtonComponentProps } from 'types';
import './style.scss'

export default function Button({ stageToRedirect, isDisabled, alignSelf = '', text}: ButtonComponentProps) {
    const { setStage } = useContext(StageContext)

    return <button 
            className="next-stage-button" 
            style={{ alignSelf }} 
            disabled={isDisabled}
            onClick={() => setStage(stageToRedirect)}
            >
                {text}
            </button>
}