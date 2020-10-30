import React from 'react';
import styled from 'styled-components';
import { Container, Typography, variants } from '../../atoms'
import { useRecoilValue } from 'recoil'
import { isMobileAtom } from '../../recoil/atoms'

const TextContainer = styled.div`
  width: ${p => p.isMobile ? "100%" : "750px"};
  text-align: center;
  line-height: 2;
`
const MissionContainer = styled(Container)`
  padding: ${p => p.isMobile && "0 20px 0 20px"};
`;

export const Mission = () => {
  const isMobile = useRecoilValue(isMobileAtom)
  const header = isMobile ? { ...variants.header } : { ...variants.xlHeader }
  const body = isMobile ? { ...variants.caption } : { ...variants.body }
  return (
    <MissionContainer isMobile={isMobile} id="mission" height="100VH" backgroundColor="#242424" flexDirection="column">
      <Typography main {...variants.body} color="#FF7F11">MISSION</Typography>
      <Typography main {...header} color={isMobile && "#fff"}>WHO ARE WE?</Typography>
      <TextContainer isMobile={isMobile}>
        <Typography {...body}>
          We are Leg Up LA! Leg Up is a volunteer-run non profit organization that aims to serve the several types of communities throughout Los Angeles county, primarily through the forms of advocacy, mobilization, coalition building, and direct assistance. Leg Up LA was founded as a movement to combat the detriments faced by the everso growing homeless and economically marginalized populations in Los Angeles. In our forms of organizing and taking action, we aim to further amplify the voices of those who are economically marginalized, and help spread awareness of the implications of houselessness in our society today. Our ideology advocates for increased services and housing for all Angelenos that need it, as well as more equitable policy and decriminalization for homeless people in Los Angeles. Through the many forms of direct assistance that we provide, we aim to create a safer space and future for citizens in Los Angeles and beyond.
        </Typography>
      </TextContainer>
    </MissionContainer>
  )
}