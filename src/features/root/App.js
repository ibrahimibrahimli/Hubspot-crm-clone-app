import React,{useState} from 'react';
import Dashboard from './Dashboard';
import {useLocation} from 'react-router-dom'
import Navi from './../components/navigation/Navi';
import NavMenu from '../components/navigation/NavMenu';
import Footer from '../components/footer/Footer';
import NaviLittle from '../components/navigation/NaviLittle';
import FooterLittle from '../components/footer/FooterLittle';


const App = () =>{
  const {pathname} = useLocation();

  return (
    <div >
      {pathname !== "/crm-platform-demo" ? <Navi/> : <div/>}
      {pathname === "/crm-platform-demo" ? <NaviLittle/> : <NavMenu/> }
      <Dashboard/>
      {pathname === "/crm-platform-demo" ? <FooterLittle/> : <Footer/>}
      
    </div>
  )
}

export default App