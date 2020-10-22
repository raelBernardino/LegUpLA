import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Typography, Button, buttonVariants, variants } from '../../atoms'
import landingimg from '../../images/landing.jpg'

export const Overlay = styled(Container)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  flex-direction: column;
  > * {
    margin: 25px 0;
  }
`;

export const Landing = () => {
  return (
    <Container id="landing" url={landingimg} height="100vh" backgroundY="33%" padding="50px 0 0 0">
      <Overlay opacity=".5" height="100vh">
        <Container flexDirection="column" height="auto">
          <Typography main {...variants.xlHeader} >COMMITTED TO ASSISTING</Typography>
          <Typography main {...variants.xlHeader} >THE COMMUNITIES OF LOS ANGELES</Typography>
        </Container>
        <Typography main {...variants.subHeader} >LEG UP LOS ANGELES</Typography>
        <AnchorLink offset="100" href="#mission">
          <Button {...buttonVariants.orange}>READ MORE</Button>
        </AnchorLink>
      </Overlay>
    </Container>
  )
}