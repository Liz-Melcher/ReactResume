import { Routes, Route } from "react-router-dom";
import NavTabs from './components/NavTabs'
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from "./components/Footer";
import ErrorPage from "./pages/Error";



function App() {
  return (
    
      <div className="d-flex flex-column min-vh-100">
        <NavTabs /> 
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>

  );
}

export default App;
