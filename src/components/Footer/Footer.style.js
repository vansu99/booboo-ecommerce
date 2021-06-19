import styled from 'styled-components';
import { mixins } from 'styles/mixins';

export const StyledFooter = styled.footer`
  width: 100%;
`;

export const FooterMain = styled.div`
  background-color: #000000;
`;

export const FooterContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: var(--container-width);
  padding: 4rem 1.6rem;
`;

export const FooterNewsletter = styled.div`
  background-color: rgb(247, 247, 247);
  padding-top: 3rem;
  padding-bottom: 3rem;

  .container {
    max-width: var(--container-width);
    width: 100%;
    margin: 0 auto;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }

  .newsletter-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const FooterNewsletterBox = styled.div`
  text-align: center;
  width: calc(33.33% - 2rem);

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 5rem;
    }
  }
`;

export const FooterNewsletterImprove = styled(FooterNewsletterBox)`
  h4 {
    font-family: var(--secondary-font);
    font-weight: 600;
    letter-spacing: 2px;
  }

  p {
    font-family: var(--secondary-font);
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 0;
    color: #000000;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    padding-bottom: 0.2rem;
    color: #000000;
    font-family: var(--secondary-font);
    font-weight: 600;
    font-size: 1.3rem;
    letter-spacing: 0.6px;
    border-bottom: 2px solid #000000;
    transition: all 256ms linear;

    &:hover {
      border-bottom: 2px solid transparent;
    }
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    h4 {
      font-size: 1.9rem;
    }
    p,
    a {
      font-size: 1.4rem;
    }
  }
`;

export const FooterNewsletterApp = styled(FooterNewsletterBox)`
  h4 {
    font-family: var(--secondary-font);
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 1.9rem;
  }

  p {
    font-family: var(--secondary-font);
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 0;
    color: #000000;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li a {
    display: inline-block;
    width: 11rem;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    h4 {
      font-size: 1.9rem;
    }
    p {
      font-size: 1.4rem;
    }
  }

  @media ${(props) => props.theme.mediaQueries.large} {
    ul {
      flex-direction: column;
    }
    li {
      margin-bottom: 1rem;
    }
  }

  @media ${(props) => props.theme.mediaQueries.minLarge} {
    li a {
      display: inline-block;
      width: 10rem;
    }
  }

  @media ${(props) => props.theme.mediaQueries.minLargest} {
    li a {
      display: inline-block;
      width: 11rem;
    }
  }
`;

export const FooterNewsletterForm = styled(FooterNewsletterBox)`
  display: flex;
  flex-direction: column;

  h4 {
    font-family: var(--secondary-font);
    font-weight: 600;
    letter-spacing: 2px;
  }

  p {
    font-family: var(--secondary-font);
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 0;
    line-height: 1.7;
    color: #000000;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    h4 {
      font-size: 1.9rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;

export const NewsletterFormItem = styled.div`
  display: flex;
  justify-content: flex-start;
  input {
    flex: 1;
    height: 34px;
    padding: 6px 12px;
    background-color: rgb(255, 255, 255);
    border: 1px solid #000000;
    outline: none;
    transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  }
  button {
    border: 0;
    outline: none;
    width: 5rem;
    height: 34px;
    background-color: #000000;
    color: #fff;
    svg {
      font-size: 2.3rem;
    }
  }
`;

export const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.mediaQueries.medium} {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  @media ${(props) => props.theme.mediaQueries.large} {
    flex-direction: column;
    width: 100%;
  }
`;

export const FooterWrap = styled.div`
  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 100%;
  }
`;

export const FooterList = styled.div`
  display: flex;
  justify-content: center;
  width: 75rem;
  margin-left: -1rem;
  margin-right: -1rem;

  @media ${(props) => props.theme.mediaQueries.small} {
    flex-direction: column;
    width: 100%;
    text-align: center;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const FooterItem = styled.div`
  width: 25%;
  padding-left: 1rem;
  padding-right: 1rem;

  h3 {
    color: #fff;
    font-family: var(--secondary-font);
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 3rem;
    letter-spacing: 1.2px;
  }

  ul {
    li {
      list-style-type: none;
      margin-bottom: 1.4rem;
      width: 100%;

      a {
        color: var(--text-third);
        display: block;
        text-decoration: none;
        cursor: pointer;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media ${(props) => props.theme.mediaQueries.small} {
    width: 100%;
    margin-bottom: 1.5rem;

    h3 {
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
    }
  }
`;

export const FooterSponsor = styled.div`
  width: calc(100% - 77rem);
  display: flex;
  justify-content: flex-end;

  @media ${(props) => props.theme.mediaQueries.medium} {
    width: 100%;
    margin-top: 4rem;
  }

  @media ${(props) => props.theme.mediaQueries.large} {
    width: 70%;
    justify-content: flex-start;
    margin-top: 4rem;
  }

  @media ${(props) => props.theme.mediaQueries.minLargest} {
    margin-top: 0;
  }
`;

export const FooterConnectSocial = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  h3 {
    color: #fff;
    font-family: var(--secondary-font);
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    margin-bottom: 2rem;
  }

  div {
    display: flex;

    a {
      display: inline-block;
      width: 4rem;
      height: 4rem;
      background: #fff;
      text-align: center;
      line-height: 3.8rem;
      border-radius: 50%;

      &:not(:last-child) {
        margin-right: 2rem;
      }
    }

    svg {
      font-size: 2rem;
      color: #000;
    }
  }

  @media ${(props) => props.theme.mediaQueries.small} {
    align-items: center;
  }
`;

export const FooterCopyright = styled.div`
  border-top: 1px solid #949494;
  ${mixins.flexCenter};
  padding: 1rem 0;
  background-color: #000;
  color: var(--text-third);
`;
