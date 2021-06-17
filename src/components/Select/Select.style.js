import styled from 'styled-components';
import { mixins } from 'styles/mixins';

export const CustomSelect = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: relative;
`;

export const OptionContainer = styled.div`
  position: absolute;
  top: 109%;
  left: 0;
  background-color: #fff;
  color: #333333;
  max-height: 0;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  order: 1;
  z-index: 99;
  ${mixins.hide};
  transition: all 0.25s linear;

  &.active {
    max-height: 11rem;
    ${mixins.show}
  }
`;

export const OptionSelected = styled.div`
  ${mixins.flexBetween}
  height: 3.2rem;
  line-height: 3.2rem;
  border-radius: 2px;
  border: 0;
  cursor: pointer;
  user-select: none;
  padding: 0 1.5rem;
  white-space: nowrap;
  background-color: #fff;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 2%);
  position: relative;
  order: 0;
`;

export const OptionItem = styled.div`
  padding: 1rem 1.4rem;
  cursor: pointer;

  label {
    cursor: pointer;
    &:hover {
      color: #ff6a88;
    }
  }

  input {
    display: none;
  }
`;
