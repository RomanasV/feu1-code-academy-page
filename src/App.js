import Container from './components/UI/Container/Container';
import './App.css';
import News from './components/News/News';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Container>
      <div className="content-wrapper">
        <News />
        <Sidebar />
      </div>
    </Container>
  );
}

export default App;
