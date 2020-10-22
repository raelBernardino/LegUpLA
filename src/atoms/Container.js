import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: ${p => p.width ? p.width : "100%"};
  height: ${p => p.height ? p.height : "100vh"};
  justify-content: ${p => p.jC ? p.jC : "center"};
  align-items: ${p => p.aI ? p.aI : "center"};
  background-image: url(${p => p.url || ""});
  background-color: ${p => p.backgroundColor};
  background-position-x: ${p => p.backgroundX || "center"};
  background-position-y: ${p => p.backgroundY || "center"};
  padding: ${p => p.padding || 0};
  flex-direction: ${p => p.flexDirection || "row"};
  position: ${p => p.position};
  display: flex;
  background-size: cover;
  box-sizing: border-box;
`;

/* props: {
  width,
  height,
  justifyContent,
  alignItems,
  url,
  backgroundColor,
  backgroundX,
  backgroundY
} */