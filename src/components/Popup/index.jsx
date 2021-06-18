import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { mixins } from 'styles/mixins';
import useClickOutside from 'hooks/useClickOutside';

const StyledPopup = styled.div`
  animation: 256ms ${mixins.fadeIn} ease-in;
  ${({ isShow }) => (Boolean(isShow) ? mixins.show : mixins.hide)};
  transition: all 256ms ease-in;
`;

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
  overflow: hidden;
`;
const PopupContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 35rem;
  min-height: 20rem;
  background-color: #fff;
  z-index: 10;
  overflow: hidden;
  border-radius: 5px;

  .popup-head {
    border-bottom: 1px solid #d2d2d2;
    padding: 1rem;
    font-size: 1.6rem;
    font-weight: 600;
    font-family: var(--secondary-font);
    color: #000;
  }
  .popup-body {
    padding: 1rem;
    height: 106px;

    .popup-content {
      height: 100%;
      color: #000;
      font-size: 1.6rem;
      font-family: var(--primary-font);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .popup-actions {
    border-top: 1px solid #d2d2d2;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;

    button {
      outline: none;
      border: 0;
      padding: 1rem 1.8rem;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      + button {
        margin-left: 1rem;
      }
    }
    .btn-disable {
      background-color: #ddd6f3;
      color: #333;
    }
    .btn-remove {
      background-color: #ff2525;
      color: #fff;
    }
  }
`;

const Popup = ({ children, onClick, showPopup, setShowPopup }) => {
  const ref = useRef();

  useEffect(() => {
    if (showPopup) {
      document.querySelector('body').classList.add('noscroll');
    }

    return () => {
      document.querySelector('body').classList.remove('noscroll');
    };
  }, [showPopup]);

  const handleClosePopup = () => {
    setShowPopup && setShowPopup(false);
  };

  const handleClick = () => {
    if (showPopup) {
      setShowPopup(false);
    }
    onClick && onClick();
  };
  //useClickOutside(ref, handleClosePopup);

  return (
    <StyledPopup isShow={showPopup}>
      <Overlay>
        <PopupContent ref={ref}>
          <h3 className="popup-head">Thông báo</h3>
          <div className="popup-body">
            <div className="popup-content">{children}</div>
          </div>
          {onClick ? (
            <div className="popup-actions">
              <button className="btn-disable" onClick={handleClosePopup}>
                Hủy
              </button>
              <button className="btn-remove" onClick={handleClick}>
                Xóa
              </button>
            </div>
          ) : null}
        </PopupContent>
      </Overlay>
    </StyledPopup>
  );
};

export default Popup;
