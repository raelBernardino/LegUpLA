import React from 'react';
import styled from 'styled-components';

const NavIcon = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    width: 25px;
    height: 25px;
    position: fixed;
    top: 25px;
    right: 25px;
    display: flex;
    z-index: 2;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
`;

const NavBar = styled.div`
  width: 100%;
  height: 2px;
  background-color: white;
`;

export const MobileNav = () => (
  <NavIcon >
    <NavBar />
    <NavBar />
    <NavBar />
  </NavIcon>
)
