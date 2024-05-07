import ReactDOM from 'react-dom/client';
import { StageProvider } from './context';
import App from './App';
import './i18n'
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StageProvider>
    <App />
  </StageProvider>
);
