import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import "smoothscroll-for-websites";
import { LanguageProvider } from './components/LanguageContext/LanguageContext';
import Main from './components/Main';

function App() {
  return (
    <div className="main-container">
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </div>
  );
}

export default App;
