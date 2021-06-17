import styled from 'styled-components';

export const FilterGroup = styled.div`
  padding: 2rem 2rem;
  border-bottom: 1px solid #cccccc45;
`;

export const FilterGroupBody = styled.ul``;

export const FilterGroupHeader = styled.div`
  text-transform: capitalize;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const FilterGroupLink = styled.li`
  cursor: pointer;
  padding: 0.7rem 0;
  font-weight: 400;
  font-size: 1.3rem;

  &:hover {
    color: #ff6a88;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    font-size: 1.5rem;  
  }
`;

export const FilterGroupCheckbox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 0;
`;

export const FilterCheckBox = styled.div`
  overflow: hidden;
  display: block;
  color: rgba(0, 0, 0, 0.8);

  input {
    display: none;
  }
`;

export const FilterCheckBoxControl = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: 1.3rem;
`;

export const FilterCheckBoxWrap = styled.li`
  display: flex;
  align-items: center;
  line-height: 1.5rem;
  margin-bottom: 1rem;

  input[type='checkbox'] {
    cursor: pointer;
    width: 1.4rem;
    height: 1.4rem;
    margin-right: 0.7rem;
  }
`;

export const FilterCheckBoxLabel = styled.span`
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  max-height: 3rem;
  word-wrap: break-word;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.4rem;

  input {
    flex: 1 1 0%;
    width: 9rem;
    height: 30px;
    padding: 0px 8px;
    background: rgb(255, 255, 255);
    border-radius: 4px;
    text-align: left;
    border: 1px solid rgb(184, 184, 184);
    outline: 0px;
    font-size: 13px;
  }

  & > span {
    margin: 0px 6px;
    vertical-align: middle;
  }
`;

export const FilterButton = styled.button`
  display: inline-block;
  padding: 0.5rem 1.2rem;
  text-align: center;
  margin-top: 1rem;
  background-color: transparent;
  border: 1px solid #333;
  border-radius: 3px;
  cursor: pointer;
  outline: none;

  &:hover {
    color: #ff6a88;
    border-color: #ff6a88;
  }
`;
