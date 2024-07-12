import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavLink } from 'react-router-dom';
import { menuItem } from './store/data-Slice';
import Header from './component/header/Header'
import Homepage from '../src/pages/Homepage';
import Aboutpage from '../src/pages/Aboutpage';
import Footer from './component/footer/Footer';
import Contactpage from './pages/Contactpage';
import Portfoliopage from './pages/Portfoliopage';

function App() {
  return (
    <>
      <section className='portfolio-section'>
        <div className="container">
          <div className="row">
            <div className="component">
              <Header />
              <Routes>
                <Route path='/' Component={Homepage} />
                <Route path='/about' Component={Aboutpage} />
                <Route path='/contact' Component={Contactpage} />
                <Route path='/portfolio' Component={Portfoliopage} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
