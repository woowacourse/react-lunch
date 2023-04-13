import { keyframes } from 'styled-components';

export const slideBottomToUp = keyframes`
  0% {
    -webkit-transform: translateY(100%);
            transform: translateY(100%);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
`;

export const backgroundOn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
