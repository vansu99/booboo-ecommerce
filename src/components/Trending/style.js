import styled from 'styled-components';

export const StyledTrending = styled.section``;

export const TrendingContainer = styled.div`
  padding: 5rem 1.6rem;
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
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
    font-size: 3.8rem;
  }
`;

export const TrendingProduct = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;

  @media ${(props) => props.theme.mediaQueries.medium} {
    grid-auto-flow: column;
    grid-auto-columns: 55%;
    padding: 1rem;
    grid-template-columns: unset;
    grid-row-gap: 2.5rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-snap-stop: always;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
