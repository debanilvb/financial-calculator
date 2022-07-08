import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home';
import EmergencyFund from './components/Calculator/EmergencyFund';
import Retirement from './components/Calculator/Retirement';
import Goal from './components/Calculator/Goal';
import ChildMarriage from './components/Calculator/ChildMarriage';
import ChildEducation from './components/Calculator/ChildEducation';
import WealthSip from './components/Calculator/WealthSip';
import EMI from './components/Calculator/EMI';
import SipTopUp from './components/Calculator/SipTopUp';
 
function App() {
  return (

    <>

    <Router>
      <Routes>

      <Route path='/'>


    
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/emergencyfund-calculator" element={<EmergencyFund />}></Route>
        <Route exact path="/retirement-calculator" element={<Retirement />}></Route>
        <Route exact path="/goal-calculator" element={<Goal />}></Route>
        <Route exact path="/childmarriage-calculator" element={<ChildMarriage />}></Route>
        <Route exact path="/childeducation-calculator" element={<ChildEducation />}></Route>
        <Route exact path="/sip-calculator" element={<WealthSip />}></Route>
        <Route exact path="/emi-calculator" element={<EMI />}></Route>
        <Route exact path="/siptopup-calculator" element={<SipTopUp />}></Route>
      

      </Route>
      </Routes>
    </Router>
     
    </>
    
  );
}

export default App;
