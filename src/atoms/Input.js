import styled from 'styled-components'

export const StyledInput = styled.input`
  width: ${p => p.width || "100%"};
  padding: 15px 10px;
  border: solid 1px ${p => p.borderColor};
  color: ${p => p.borderColor};
  outline: none;
  font-size: 15px;
  font-weight: 300;
  font-family: "Oswald", sans-serif;
`