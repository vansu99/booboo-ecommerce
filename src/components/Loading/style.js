import styled, { keyframes } from 'styled-components';

const Spina = keyframes`
  0%   { transform: rotate(90deg); }
  0%  { transform: rotate(90deg); }
  50%  { transform: rotate(180deg); }
  75%  { transform: rotate(270deg); }
  100% { transform: rotate(360deg); }
`;
const Spinb = keyframes`
  0%   { transform: rotate(90deg); }
  25%  { transform: rotate(90deg); }
  25%  { transform: rotate(180deg); }
  75%  { transform: rotate(270deg); }
  100% { transform: rotate(360deg); }
`;

const Spinc = keyframes`
  0%   { transform: rotate(90deg); }
  25%  { transform: rotate(90deg); }
  50%  { transform: rotate(180deg); }
  50%  { transform: rotate(270deg); }
  100% { transform: rotate(360deg); }
`;

const Spind = keyframes`
  0%   { transform: rotate(90deg); }
  25%  { transform: rotate(90deg); }
  50%  { transform: rotate(180deg); }
  75%  { transform: rotate(270deg); }
  75% { transform: rotate(360deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0.9;
  position: fixed;

  & > div {
    width: 60px;
    height: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: 50%;
    margin-top: -30px;

    & > div {
      content: '';
      position: absolute;
      width: 18px;
      height: 18px;
      background: #ff6a88;
      top: 10px;
      left: 10px;
      transform-origin: 20px 20px;
      border-radius: 8px;
      animation: ${Spina} 2s infinite cubic-bezier(0.5, 0, 0.5, 1);
    }

    & > .c2 {
      top: 10px;
      left: auto;
      right: 10px;
      transform-origin: -4px 20px;
      animation: ${Spinb} 2s infinite cubic-bezier(0.5, 0, 0.5, 1);
    }

    & > .c3 {
      top: auto;
      left: auto;
      right: 10px;
      bottom: 10px;
      transform-origin: -4px -4px;
      animation: ${Spinc} 2s infinite cubic-bezier(0.5, 0, 0.5, 1);
    }

    & > .c4 {
      top: auto;
      bottom: 10px;
      transform-origin: 20px -4px;
      animation: ${Spind} 2s infinite cubic-bezier(0.5, 0, 0.5, 1);
    }
  }
`;
