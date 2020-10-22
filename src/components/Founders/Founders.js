import React, { useState } from 'react';
import styled from 'styled-components';
import { Founder } from './Founder'
import { Bubbles } from './Bubbles'
import {
  Container,
  Typography,
  Image,
  buttonVariants,
  variants
} from '../../atoms'

const TextContainer = styled.div`
  width: 33%;
`;

const FoundersContainer = styled(Container)`
  position: relative;
`

export const Founders = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Container id="founders" backgroundColor="#fff" padding="125px 175px 80px 175px">
      <Container height="100%" flexDirection="column" jC="flex-start" aI="flex-start">
        <Typography main {...variants.body} color="#FF7F11">FOUNDERS</Typography>
        <Typography main {...variants.xlHeader} color="#242424">LET'S GET PERSONAL</Typography>
        <Bubbles
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
        <TextContainer>
          <Typography {...variants.body} color="#242424">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
        </TextContainer>
      </Container>
      <Container padding="0 25px" position="relative" height="100%" flexDirection="column" jC="flex-start" aI="flex-start">
        <Founder
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      </Container>
    </Container >
  )
}