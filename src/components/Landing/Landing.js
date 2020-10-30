import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useRecoilState } from 'recoil'
import { isMobileAtom } from '../../recoil/atoms'
import { Container, Typography, Button, buttonVariants, variants } from '../../atoms'
import { useWindowSize } from '../../hooks'
import landingimg from '../../images/landing.jpg'

export const Overlay = styled(Container)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  flex-direction: column;
  padding: ${p => p.isMobile && '0 15px 0 15px'};
  > * {
    margin: ${p => p.isMobile ? '10px 0' : '25px 0'};
  }
`;

const LandingContainer = styled(Container)`
`;

export const Landing = () => {
  const size = useWindowSize()
  const [isMobile, setIsMobile] = useRecoilState(isMobileAtom)
  React.useEffect(() => {
    (size.width < 500) ? setIsMobile(true) : setIsMobile(false)
  }, [size.width])
  const header = isMobile ? { ...variants.headerTwo } : { ...variants.xlHeader }
  const subHeader = isMobile ? { ...variants.body } : { ...variants.subHeader }
  return (
    <LandingContainer id="landing" url={landingimg} height="100vh" backgroundY="33%">
      <Overlay isMobile={isMobile} opacity=".5" height="100vh">
        <Container flexDirection="column" height="auto">
          <Typography main {...header} color="#fff" >COMMITTED TO ASSISTING THE COMMUNITIES OF<br /> LOS ANGELES</Typography>
        </Container>
        <Typography main {...subHeader} color="#FF7F11" >LEG UP LOS ANGELES</Typography>
        <AnchorLink offset={isMobile ? "0" : "100"} href="#mission">
          <Button {...buttonVariants.orange}>READ MORE</Button>
        </AnchorLink>
      </Overlay>
    </LandingContainer >
  )
}