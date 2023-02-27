import {  Layout } from 'antd';
import React,{useState} from 'react';
import {isMobile} from '../const';
import SidebarFixed from '../components/sidebarFixed';
import SidebarDrawer from '../components/sidebarDrawer';
import Orders from './orders';
import { Routes, Route } from "react-router-dom";
import Dashboard from './dashboard';
import Users from './Users';
import Search from './search';
import { AuthPage } from '../components/AuthPage';




const Home = (props) => {
  const [open, setOpen] = useState(false);



  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };



  return (
    <AuthPage/>
    
  );};{/*
    <Layout hasSider>
    
      <SidebarFixed width={props.width} open={open} onClose={onClose}/>
      <Routes>
        <Route exact path='/' element={<Dashboard width={props.width} showDrawer={showDrawer}/>} />
        <Route exact path='/orders' element={<Orders width={props.width} showDrawer={showDrawer}/>} />
        <Route exact path='/users' element={<Users width={props.width} showDrawer={showDrawer}/>} />
        <Route exact path='/search' element={<Search width={props.width} showDrawer={showDrawer}/>} />
      </Routes>
  </Layout>
  );
};*/}
export default Home;