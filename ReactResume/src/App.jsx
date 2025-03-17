import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavTabs from './components/NavTabs'
import Home from './pages/Home';
import Resume from 'components/pages/Resume';
import Portfolio from 'components/pages/Portfolio';
import Contact from 'components/pages/Contact';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "components/footer";



function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavTabs /> 
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
