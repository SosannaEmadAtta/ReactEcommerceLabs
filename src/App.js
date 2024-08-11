import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppRouter from './router/Router';
import { Provider } from 'react-redux'
import store from './components/store/store'

import themeContext from './components/context/themecontext';
import languageContext from './components/context/languagecontext';

import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState("en")
  return (
    <div className="App">
      
      <Provider store={store}>
      <themeContext.Provider value={{darkMode, setDarkMode}}>
      <languageContext.Provider value={{language, setLanguage}}>
        <AppRouter/>
      </languageContext.Provider>
        </themeContext.Provider>
      </Provider>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
