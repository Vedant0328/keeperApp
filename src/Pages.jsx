import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Services from './components/Services';

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;