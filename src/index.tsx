import ReactDOM from 'react-dom/client'
import { StageProvider } from './context'
import App from './App'
import './i18n'
import './index.scss'
import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'

setupLogRocketReact()

LogRocket.init('f8fpck/portfolio')
LogRocket.log('Portfolio app initialized')
LogRocket.identify(window.navigator.language, {
  userAgent: window.navigator.userAgent
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StageProvider>
    <App />
  </StageProvider>
)
