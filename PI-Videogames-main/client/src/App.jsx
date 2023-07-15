import {Route, Routes} from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import HomePage from './Components/HomePage/HomePage';
import Landingpage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
