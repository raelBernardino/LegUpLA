import styled from 'styled-components';

export const Typography = styled.span`
  font-size: ${p => p.size || "12px"};
  font-weight: ${p => p.weight || 300};
  color: ${p => p.color || "black"};
  font-family: ${p => p.main ? ("Oswald" || "Roboto") : "Source Sans Pro"};
  text-align: center;
`

export const variants = {
  xlHeader: {
    size: "64px",
    weight: "700",
    color: "#fff",
  },
  header: {
    size: "48px",
    weight: "700",
    color: "#FF7F11"
  },
  headerTwo: {
    size: "32px",
    weight: "700",
    color: "#FF7F11"
  },
  subHeader: {
    size: "24px",
    weight: "300",
    color: "#FF7F11",
  },
  body: {
    size: "16px",
    weight: "300",
    color: "#fff",
  },
  caption: {
    size: "12px",
    weight: "300",
    color: "#fff",
  }

}