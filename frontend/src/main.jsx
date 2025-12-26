import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router';
import {Toaster, toast} from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />


<Toaster
        position="top-center"
        toastOptions={{
          unstyled: true, // REQUIRED
        }}
      >
        {(t) => {
          let cls = "btn btn-soft pointer-events-none";

          if (t.type === "success") cls += " btn-success";
          if (t.type === "error") cls += " btn-error";

          return (
            <button type="button" className={cls}>
              {t.message}
            </button>
          );
        }}
      </Toaster>


    </BrowserRouter>
  </StrictMode>,
)
