import styled from 'styled-components';

export const StyledServices = styled.section`
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
    font-size: 3.8rem;
  }

  @media ${(props) => props.theme.mediaQueries.minMedium} {
    padding-bottom: 2rem;
    font-size: 3.3rem;
    margin-bottom: 3rem;
  }
`;

export const CardInfoService = styled.ul`
  display: flex;

  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
export const CardInfoServiceItem = styled.li`
  list-style-type: none;
  border: 1px solid #d1d1d1;
  padding: 2rem;
  width: 25%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 991px) {
    width: 50%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`;
export const CardInfoServiceImage = styled.div`
  margin-right: 1rem;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardInfoServiceDesc = styled.div`
  width: calc(100% - 3rem);
  h3 {
    font-weight: 600;
    margin-bottom: 0.8rem;
  }
  span {
    line-height: 1.4;
  }
`;
