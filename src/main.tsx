import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import store from './Store/index.tsx';
import { Provider } from 'react-redux';
import './index.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <div className='wrapMain'>
      <App />
    </div>
    </Provider>

    </BrowserRouter>
  </StrictMode>,
)
