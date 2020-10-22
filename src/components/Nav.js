import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Typography, variants } from '../atoms'

const NavContainer = styled(Container)`
  position: fixed;
  top: 0;
  z-index: 2;
`;

export const Nav = () => {
  return (
    <NavContainer width="100%" height="100px" backgroundColor="#191919">
      <Container jC="space-around" padding="50px 120px" height="100%">
        <AnchorLink href="#mission">
          <Typography main {...variants.body} color="#fff">MISSION</Typography>
        </AnchorLink>
        <AnchorLink href="#volunteer">
          <Typography main {...variants.body} color="#fff">VOLUNTEER</Typography>
        </AnchorLink>
        <AnchorLink href="#landing">
          <Typography main {...variants.headerTwo}>LEG UP LOS ANGELES</Typography>
        </AnchorLink>
        <AnchorLink href="#donate">
          <Typography main {...variants.body} color="#fff">DONATE</Typography>
        </AnchorLink>
        <AnchorLink href="#founders">
          <Typography main {...variants.body} color="#fff">FOUNDERS</Typography>
        </AnchorLink>
      </Container>
    </NavContainer>
  )
}