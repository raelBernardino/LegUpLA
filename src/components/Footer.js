import React from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram, AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { Container, Typography, variants } from '../atoms'

const IconContainer = styled(Container)`
  font-size: 24px;
  > * {
    padding: 0 10px;
    transition: .3s;
    opacity: .5;
    &:hover {
      cursor: pointer;
      opacity: 1;
      transition: .3s;
    }
  }
`;

const FooterContainer = styled(Container)`
  > * {
    margin-bottom: 10px;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer height="250px" backgroundColor="#242424" flexDirection="column">
      <Typography main {...variants.headerTwo}>LEG UP LOS ANGELES</Typography>
      <IconContainer width="200px" height="auto" padding="12px 0" >
        <AiOutlineInstagram color="#fff" />
        <AiFillFacebook color="#fff" />
        <AiOutlineTwitter color="#fff" />
      </IconContainer>
      <Typography color="#fff">@2020 Leg Up Los Angeles</Typography>
    </FooterContainer>
  )
};