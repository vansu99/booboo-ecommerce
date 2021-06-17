import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArticleBody,
  ArticleImage,
  ArticleItem,
  ArticleList,
  InspireContainer,
  SectionTitle,
  StyledInspire,
} from './Insprise.style';

const Inspire = () => {
  return (
    <StyledInspire>
      <InspireContainer>
        <SectionTitle>Inspire Me</SectionTitle>
        <ArticleList>
          <ArticleItem>
            <ArticleImage>
              <img
                src="https://images.pexels.com/photos/2646776/pexels-photo-2646776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
            </ArticleImage>
            <ArticleBody>
              <Link to="/">Shop new arrivals</Link>
            </ArticleBody>
          </ArticleItem>
          <ArticleItem>
            <ArticleImage>
              <img
                src="https://images.unsplash.com/photo-1612029266021-2d03c52a6424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt=""
              />
            </ArticleImage>
            <ArticleBody>
              <Link to="/">shop the edit</Link>
            </ArticleBody>
          </ArticleItem>
          <ArticleItem>
            <ArticleImage>
              <img src="https://cdn.dashhudson.com/media/640/1623389475.04744898297.jpeg" alt="" />
            </ArticleImage>
            <ArticleBody>
              <Link to="/">shop the edit</Link>
            </ArticleBody>
          </ArticleItem>
          <ArticleItem>
            <ArticleImage>
              <img
                src="https://images.pexels.com/photos/956727/pexels-photo-956727.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
            </ArticleImage>
            <ArticleBody>
              <Link to="/">shop the edit</Link>
            </ArticleBody>
          </ArticleItem>
        </ArticleList>
      </InspireContainer>
    </StyledInspire>
  );
};

export default Inspire;
