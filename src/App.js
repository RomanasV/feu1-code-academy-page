import { Routes, Route } from 'react-router-dom';
import './App.css';
import Container from './components/UI/Container/Container';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import News from './pages/News/News';
import Home from './pages/Home/Home';
import Programs from './pages/Programs/Programs';

function App() {
  return (
    <>
      {/* puslapiopavadinimas.lt/ */}
      {/* puslapiopavadinimas.lt/naujienos */}
      {/* puslapiopavadinimas.lt/programos */}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programos" element={<Programs />} />
        <Route path="/naujienos" element={<News />} />
      </Routes>


      {/* <Container>
        <div className="content-wrapper">
          <News />
          <Sidebar />
        </div>
      </Container> */}
    </>
  );
}

export default App;
