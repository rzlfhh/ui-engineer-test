import Cta from './components/Cta';
import Footer from './components/Footer';
import Homepage from './pages/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Artikelpage from './pages/Artikelpage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/Artikelpage' element={<Artikelpage />} />
        </Routes>
        <Cta />
        <Footer />
      </Router>
    </>
  );
}

export default App;
