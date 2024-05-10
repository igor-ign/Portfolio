import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { StageContext } from 'context'
import { StageTypes } from 'types'
import './style.scss'
import { useMediaQuery } from '@mui/material'

export default function StagesHeader() {
    const { t } = useTranslation()
    const { stage } = useContext(StageContext)
    const isNotebookOrDesktop = useMediaQuery('(min-width:1100px)')

    const middleProgressBarValue = stage !== 'language' && stage !== 'soft-skills' ? 1 : 0

    function getStageNumberElementClassname(elementStage: StageTypes) {
        const isElementCurrentStage = stage === elementStage

        const stageNumberElementClassname = isElementCurrentStage ? 'stage-number current' : 'stage-number'

        return stageNumberElementClassname
    }

    return <header className='stages-header-container'>
        <ol className="stages-list" style={{ listStyle: 'none'}}>
            <li className='stage'>
                <div className="header-stage-container">
                    {t('language-selection-header-stage')}
                    <div className={getStageNumberElementClassname('language')}>1</div>
                </div>
                <progress 
                value={stage !== 'language'  ? 1 : 0}  
                max="1"
                >
                </progress>
                <div className="header-stage-container">
                    {t('soft-skills-selection-header-stage')}
                    <div className={getStageNumberElementClassname('soft-skills')}>2</div>
                </div>
            </li> 
            {
                isNotebookOrDesktop &&
                <progress 
                value={middleProgressBarValue} 
                max="1"
                >
                </progress>
            }    
            <li className='stage'>
                <div className="header-stage-container">
                    {t('hard-skills-selection-header-stage')}
                    <div className={getStageNumberElementClassname('hard-skills')}>3</div>
                </div>
                <progress   
                value={stage === 'result' ? 1 : 0}             
                className={stage === 'result' ? 'full' : ''}  
                max="1"
                >
                </progress>
                <div className="header-stage-container">
                    {t('result-header-stage')}
                    <div className={getStageNumberElementClassname('result')}>4</div>     
                </div>
            </li>
        </ol>
    </header>
}