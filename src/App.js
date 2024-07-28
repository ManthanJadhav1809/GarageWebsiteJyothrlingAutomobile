import './App.css';
import "../src/Component/Style.css";
import "../src/Component/ResponsiveDesign.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComponent from './Component/HomeComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
      </Routes>
    </Router>
  );
}

export default App;
