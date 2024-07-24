import './App.css';
import "../src/Component/Style.css";
import "../src/Component/ResponsiveDesign.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComponent from './Component/HomeComponent';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
        <Route path="/" element={<HomeComponent/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
