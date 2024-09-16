import App from './App.jsx'
import ReactDom from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store.js'
import './css/output.css'
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
