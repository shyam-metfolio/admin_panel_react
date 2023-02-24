import React, { useState } from 'react'
import { AppstoreOutlined,HomeOutlined,UserOutlined } from '@ant-design/icons';
import { Col,Layout } from 'antd';
import {sidebarColor,greyColor, menuSelectedColor  } from '../const';
import { Link } from "react-router-dom";
import styled from 'styled-components';
const { Sider } = Layout;

const SidebarFixed = (props) => {
   

  const [tapped_orders, setTappedOrders] = useState(false);
  const [tapped_home, setTappedHome] = useState(true);
  const [tapped_user, setTappedUser] = useState(false);

  const HomeContainer = styled.div`
  width:100px;
  height: 80px;
  border-radius:12px;
  align-items:center;
  background-color: ${tapped_home?menuSelectedColor:null};
  display:flex;
  flex-direction:column;
  margin-bottom:16px;
  justify-content:center;
  color: ${tapped_home?"white": greyColor};
  &:hover{
      color:white;
  }
  `;
  const OrderContainer = styled.div`
  width:100px;
  height: 80px;
  border-radius:12px;
  align-items:center;
  background-color: ${tapped_orders?menuSelectedColor:null};
  display:flex;
  flex-direction:column;
  margin-bottom:16px;
  justify-content:center;
  color: ${tapped_orders?"white": greyColor};
  &:hover{
      color:white;
  }
  `;

  const UserContainer = styled.div`
  width:100px;
  height: 80px;
  border-radius:12px;
  align-items:center;
  background-color: ${tapped_user?menuSelectedColor:null};
  display:flex;
  flex-direction:column;
  margin-bottom:16px;
  justify-content:center;
  color: ${tapped_user?"white": greyColor};
  &:hover{
      color:white;
  }
  `;

  return (
    <Sider
      width={150}
      breakpoint='md'
      collapsedWidth='0'
        style={{
          backgroundColor:sidebarColor,
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
       
        <img alt='logo' src='images/logo.png' width={120} style={{
          margin:'32px 0px',
        }}/>
       
        <Col style={{
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          alignItems:'center'
        }}>
        
        <Link to="/">
        <a>
        <HomeContainer onClick={()=>{
            setTappedHome(true);
            setTappedOrders(false);setTappedUser(false);
        }} >
          <HomeOutlined style={{
            fontSize:'24px',
            fontWeight:'500',
            
          }}/>
          <div style={{
            fontFamily:'Poppins',
            fontSize:'14px',
            fontWeight:'500',
          }}>Home</div>
        </HomeContainer>
        </a></Link>
        <Link to='/orders'>
          <a>
          <OrderContainer onClick={()=>{
            setTappedHome(false);
            setTappedOrders(true);setTappedUser(false);
        }} >
          <AppstoreOutlined style={{
            fontSize:'24px',
            fontWeight:'500',
            
          }}/>
          <div style={{
            fontFamily:'Poppins',
            fontSize:'14px',
            fontWeight:'500',
          }}>Orders</div>
        </OrderContainer>
          </a>
        </Link>
        <Link to='/users'>
          <a>
          <UserContainer onClick={()=>{
            setTappedHome(false);
            setTappedOrders(false);
            setTappedUser(true);
        }} >
          <UserOutlined style={{
            fontSize:'24px',
            fontWeight:'500',
          }}/>
          <div style={{
            fontFamily:'Poppins',
            fontSize:'14px',
            fontWeight:'500',
          }}>Users</div>
        </UserContainer>
          </a>
        </Link>
        </Col>
      </Sider>
  )
}

export default SidebarFixed