import styled from 'styled-components';

export const Image = styled.div`
  background-image: url(${p => p.url || ""});
  background-position-x: ${p => p.backgroundX || "center"};
  background-position-y: ${p => p.backgroundY || "center"};
  width: ${p => p.width ? p.width : "100%"};
  height: ${p => p.height};
  background-size: cover;
`;