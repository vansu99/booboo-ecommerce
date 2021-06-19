import styled from 'styled-components';

export const StyledInspire = styled.section``;

export const InspireContainer = styled.div`
  width: 100%;
  max-width: var(--container-width);
  padding: 5rem 1.6rem;
  margin: 0 auto;

  @media ${(props) => props.theme.mediaQueries.small} {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  @media ${(props) => props.theme.mediaQueries.minMedium} {
    padding-top: 0;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  padding-bottom: 3rem;
  font-size: 3.6rem;
  font-family: var(--title-font);
  position: relative;
  margin-bottom: 5rem;
  letter-spacing: 3px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 9rem;
    height: 4px;
    background-color: red;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    font-size: 3rem;
  }
`;

export const ArticleList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 40rem 40rem;
  grid-gap: 6rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const ArticleItem = styled.li`
  list-style-type: none;
  position: relative;
`;

export const ArticleImage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${(props) => props.theme.mediaQueries.small} {
  }
`;

export const ArticleBody = styled.div`
  position: absolute;
  left: 50%;
  top: auto;
  bottom: 0;
  transform: translate(-50%, 50%);
  background-color: #000000;
  width: 18rem;
  height: 4.5rem;
  line-height: 4.5rem;
  text-align: center;
  z-index: 10;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out;

  &:hover {
    background-color: #3b3b3b;
  }

  a {
    font-size: 1.2rem;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1.2px;
    font-family: var(--secondary-font);
    text-transform: uppercase;
    text-decoration: none;
  }
`;
