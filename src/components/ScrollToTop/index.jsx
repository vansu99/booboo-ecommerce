import React, { useState, useEffect } from 'react';
import { BsArrowUp } from 'react-icons/bs';
import styled from 'styled-components';
import { mixins } from 'styles/mixins';

const StyledScrollToTop = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  background-color: #fff;
  width: 5rem;
  height: 5rem;
  text-align: center;
  line-height: 5rem;
  animation: 1s ${mixins.fadeIn} ease-in-out;
  cursor: pointer;
  border: 3px solid #000;
  border-radius: 2px;
  overflow: hidden;
  ${({ isVisible }) => (isVisible ? mixins.show : mixins.hide)}

  div > svg {
    font-size: 2.5rem;
    color: #000000;
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <StyledScrollToTop isVisible={isVisible}>
      <div onClick={scrollToTop}>
        <BsArrowUp />
      </div>
    </StyledScrollToTop>
  );
};

export default ScrollToTop;
