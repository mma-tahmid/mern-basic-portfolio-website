import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'
import { Bounce, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // required CSS

import { store } from './react-redux/store/store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'

const persistor = persistStore(store)

createRoot(document.getElementById('root')).render(
  <StrictMode>


    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

          <App />

          <ToastContainer
            position="bottom-right"
            // autoClose={5000}
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
      

      </PersistGate>
    </Provider>



  </StrictMode>,
)
