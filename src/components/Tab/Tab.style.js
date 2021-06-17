import styled from 'styled-components';

export const StyledProductMenu = styled.div``;

export const ProductMenuList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 4rem 0;
`;

export const ProductMenuItem = styled.li`
  font-size: 1.8rem;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  margin-left: 3rem;
  margin-right: 3rem;
  cursor: pointer;
  border-bottom: 4px solid transparent;
  transition: all 0.15s linear;
  padding-bottom: 0.3rem;
  ${({ selected }) => selected && 'color: #ff9a8b; border-color: #ff9a8b'}
`;

export const TabContent = styled.div`
  width: 100%;
`;
