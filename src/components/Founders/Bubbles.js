import React from 'react';
import styled from 'styled-components';
import { Container } from '../../atoms'
import justinMartinez from '../../images/justinMartinez.jpg'

const BubbleContainer = styled(Container)`
  position: relative;
`;

const Bubble = styled.div`
  width: 125px;
  height: 125px;
  position: absolute;
  border-radius: 50%;
  background-position-x: left;
  /* background-position: center; */
  background-size: cover;
  background-color: ${p => p.backgroundColor};
  background-image: url(${p => p.url});
  left: ${p => p.index * 15}%;
  border: solid white 10px;
  transition: .3s;
  &:hover {
    cursor: pointer;
    transition: .3s;
    width: 175px;
    height: 175px;
  }
`

export const Bubbles = ({ isSelected, setIsSelected }) => {
  return (
    <BubbleContainer height="50%" width="100%" jC="flex-start" aI="center">
      <Bubble backgroundColor="#242424" />
      <Bubble backgroundColor="#242424" index="1" />
      <Bubble backgroundColor="#000" index="2" />
      <Bubble backgroundColor="#ff7f11" index="3" />
      <Bubble url={justinMartinez} onClick={() => setIsSelected(!isSelected)} index="4" />
    </BubbleContainer>
  )
}