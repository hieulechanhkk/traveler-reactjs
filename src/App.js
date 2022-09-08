import './App.css'
import { Fragment, useEffect, useState } from 'react';
import Aos from 'aos'
import "aos/dist/aos.css"
import './responsive.css'
import Overlayer from './components/Overlayer/Overlayer';
import NavBar from './components/Navigation/NavBar'
import Newyork from './img/halongbay.jpg'
import FillContainer from './Container/FillContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import Introduce from './pages/IntroducePage/Introduce'
import HomePage from './pages/HomePage/HomePage';
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  const [choose, setChoose] = useState(2)
  function receiveData (value) {
    setChoose(value)
  }
  return (
    <Fragment>
      <Overlayer></Overlayer>
      <Router>
        <div className="overlayer">
          <NavBar choosee = {choose}></NavBar>
          <Route exact path = "/" component = {Introduce}>
          </Route>
          <Route path = "/home"><HomePage receiveData = {receiveData}></HomePage></Route>
        </div>
      </Router>
      <FillContainer></FillContainer>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
