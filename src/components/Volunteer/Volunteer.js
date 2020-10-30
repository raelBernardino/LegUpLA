import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Typography,
  Image,
  Button,
  StyledInput,
  buttonVariants,
  variants
} from '../../atoms'
import { useRecoilValue } from 'recoil'
import { isMobileAtom } from '../../recoil/atoms'
import volunteer1 from '../../images/volunteer1.jpg'
import volunteer2 from '../../images/volunteer2.jpg'
import volunteer3 from '../../images/volunteer3.jpg'

const ImageContainer = styled(Container)`
  > *:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const TextContainer = styled.div`
  width: 75%;
`;

const NewsLetterContainer = styled(Container)`
  height: ${p => p.isMobile && "auto"};
  > * {
    margin-bottom: 32px;
  }
`

export const Volunteer = () => {
  const isMobile = useRecoilValue(isMobileAtom)
  return (
    <Container
      flexDirection={isMobile && "column"}
      id="volunteer"
      backgroundColor="#fff"
      height={isMobile ? "auto" : "100vh"}
      padding={isMobile ? "0" : "125px 175px 80px 175px"}>
      <Container height="100%" flexDirection="column" jC="space-between">
        <Container height="auto" flexDirection="column" aI="flex-start">
          <Typography main {...variants.body} color="#FF7F11">VOLUNTEER</Typography>
          <Typography main {...variants.xlHeader} color="#242424">HOW YOU</Typography>
          <Typography main {...variants.xlHeader} color="#242424">CAN HELP</Typography>
          <TextContainer>
            <Typography {...variants.body} color="#242424">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </TextContainer>
        </Container>
        <NewsLetterContainer flexDirection="column" aI="flex-start" jC="flex-end">
          <StyledInput width="85%" borderColor="#ff7f11" placeholder="john@doe.com" />
          <Button {...buttonVariants.orange}>SIGN UP</Button>
        </NewsLetterContainer>
      </Container>
      <ImageContainer padding="20px 0 20px 20px" height="100%" flexDirection="column" aI="flex-end">
        <Image width="80%" height="100%" url={volunteer1} />
        <Image width="80%" height="100%" url={volunteer2} />
        <Image width="80%" height="100%" url={volunteer3} />
      </ImageContainer>
    </Container>
  )
}