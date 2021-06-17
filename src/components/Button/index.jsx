import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  outline: none;
  border: 0;
  padding: 0.5rem 1rem;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  font-size: 1.4rem;
  background-color: #ffffff;
  color: '#000000';

  &:active {
    background: #41addd;
    color: #fff;
  }

  &:disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;

export default function Button({ children, primary }) {
  return <StyledButton primary={primary}>{children}</StyledButton>;
}
