import { StrictMode } from 'react'
import{BrowserRouter }from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Context from './Context.jsx'


createRoot(document.getElementById('root')).render(
<BrowserRouter>

<Context.Provider value='ishiiii'>   
 <App />
 </Context.Provider>

  
    </BrowserRouter>

)
