import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import News from './pages/News/News';
import Home from './pages/Home/Home';
import Programs from './pages/Programs/Programs';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programos" element={<Programs />} />
        <Route path="/naujienos" element={<News />} />
      </Routes>
    </>
  );
}

export default App;
