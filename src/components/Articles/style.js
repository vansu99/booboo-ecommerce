import styled from 'styled-components';

export const StyledArticle = styled.section`
  padding: 6rem 1.6rem;
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  padding-bottom: 3rem;
  font-size: 3.4rem;
  font-family: var(--secondary-font);
  position: relative;
  margin-bottom: 5rem;
  letter-spacing: 2px;

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

  @media screen and (max-width: 767px) {
    font-size: 2.5rem;
  }
`;

export const ArticleList = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2.5rem;
  grid-template-areas:
    'h1 h2 h3'
    'h1 h4 h5';
`;
export const ArticleItem = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child {
    grid-area: h1;
  }
  &:nth-child(2) {
    grid-area: h2;
  }
  &:nth-child(3) {
    grid-area: h3;
  }
  &:nth-child(4) {
    grid-area: h4;
  }
  &:nth-child(5) {
    grid-area: h5;
  }
`;

export const ArticleImage = styled.img`
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  object-fit: cover;
  height: 20rem;
  // dung kích thuoc 'height' cua img
  flex-shrink: 0;
`;

export const ArticleContent = styled.div`
  padding: 2.5rem 0;
  font-weight: 300;
  // lap day cho trong con lai
  flex: 1;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
`;

export const ArticleTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

export const ArticleTime = styled.span`
  font-size: 1.4rem;
  color: #d1d1d1;
  text-transform: uppercase;
`;
