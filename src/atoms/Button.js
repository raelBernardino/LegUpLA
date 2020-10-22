import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  width: ${p => p.width || "250px"};
  height: ${p => p.height || "60px"};
  background-color: ${p => p.bordered ? "transparent" : p.backgroundColor};
  color: ${p => p.color || "black"};
  border: ${p => p.border || "none"};
  text-decoration: none;
  font-family: "Oswald";
  font-size: 15px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  transition: .3s;
  &:hover {
    background-color: ${p => p.hoverBackground};
    color: ${p => p.hoverColor};
    transition: .3s;
    cursor: pointer;
  }
`;

export const buttonVariants = {
  normal: {
    backgroundColor: "#242424",
    color: "#fff",
    hoverBackground: "#fff",
    hoverColor: "#FF7F11"
  },
  orange: {
    backgroundColor: "#FF7F11",
    color: "#fff",
    hoverBackground: "#242424",
  },
  grey: {
    backgroundColor: "#242424",
    color: "#fff",
    hoverBackground: "#fff",
    hoverColor: "#FF7F11",
  }
}