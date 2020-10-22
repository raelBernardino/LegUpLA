import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Button, buttonVariants, variants } from '../../atoms'

const DonateContainer = styled(Container)`
  text-align: center;
  >:last-child {
    margin: 32px 0;
  }
`;

export const Donate = () => {
  return (
    <Container id="donate" backgroundColor="#ff7f11" flexDirection="column">
      <DonateContainer height="auto" width="33%" flexDirection="column">
        <Typography main size="200px" weight="700" color="white">DONATE</Typography>
        <Typography {...variants.body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
        <Button {...buttonVariants.grey}>DONATE</Button>
      </DonateContainer>
    </Container>
  )
}