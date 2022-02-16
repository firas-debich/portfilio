import styled , { keyframes }from 'styled-components';

const typing = keyframes`
from {
  width: 0
}
`

const blink = keyframes`
50% {
  border-color: transparent
}
`
export const Typing = styled.div`
  width: 25ch;
  animation: ${typing} 2s steps(22), ${blink} .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 4px solid;
 `
export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;
