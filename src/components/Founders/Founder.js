import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Button, buttonVariants, variants } from '../../atoms'
import justinMartinez from '../../images/justinMartinez.jpg'

const FounderContainer = styled(Container)`
  position: absolute;
  transform: ${p => p.selected ? "translateX(0)" : "translateX(150%)"};
  transition: .5s;
`;

const DescriptionContainer = styled(Container)`
  >:last-child {
    margin: 25px 0;
  }
`;

export const Founder = ({ isSelected, setIsSelected }) => {
  return (
    <FounderContainer width="100%" height="100%" selected={isSelected} flexDirection="column">
      <Container url={justinMartinez} width="80%" height="100%" />
      <DescriptionContainer width="100%" height="100%" padding="75px 75px 0 75px" flexDirection="column" jC="flex-end" aI="flex-start">
        <Typography main {...variants.body} color="#FF7F11">CEO</Typography>
        <Typography main {...variants.xlHeader} color="#242424">JUSTIN</Typography>
        <Typography main {...variants.xlHeader} color="#242424">MARTINEZ</Typography>
        <Typography {...variants.body} color="#000">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
        <Button {...buttonVariants.orange} onClick={() => setIsSelected(!isSelected)}>RETURN</Button>
      </DescriptionContainer>
    </FounderContainer>
  )
}