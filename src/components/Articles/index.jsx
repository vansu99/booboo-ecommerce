import React from 'react';
import {
  StyledArticle,
  SectionTitle,
  ArticleContent,
  ArticleImage,
  ArticleItem,
  ArticleList,
  ArticleTitle,
  ArticleTime,
} from './style';

const Article = () => {
  return (
    <StyledArticle>
      <SectionTitle>About Us</SectionTitle>
      <ArticleList>
        <ArticleItem>
          <ArticleImage
            src="https://cdnmedia.thethaovanhoa.vn/Upload/B0g2ZnIe48e9au7dkcAV3w/files/000039/0000000000000000000211/00000262/00026/0016/8/MU%20tan%20mong%20duoi%20bat%20Man%20City.jpg"
            style={{ height: '70rem' }}
          />
          {/* <ArticleContent>
            <ArticleTitle>Lorem ipsum dolor sit amet consectetur</ArticleTitle>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla et repudiandae velit. Facere est sed quasi
              ullam deserunt nisi! Pariatur consequatur omnis tenetur laudantium, veritatis excepturi rerum dignissimos
              nihil repellat.
            </p>
            <ArticleTime>apr 21, 2021</ArticleTime>
          </ArticleContent> */}
        </ArticleItem>
        <ArticleItem>
          <ArticleImage src="https://img.nhandan.com.vn/Files/Images/2021/04/12/1311979077_0-1618207230196.jpg" />
          <ArticleContent>
            <ArticleTitle>Lorem ipsum dolor sit amet consectetur</ArticleTitle>
            <ArticleTime>apr 21, 2021</ArticleTime>
          </ArticleContent>
        </ArticleItem>
        <ArticleItem>
          <ArticleImage src="https://image.24h.com.vn/upload/2-2021/images/2021-04-17/972448_10158545207327746_5816006854142529684_n-1618658457-706-width640height480.jpg" />
          <ArticleContent>
            <ArticleTitle>Lorem ipsum dolor sit amet consectetur</ArticleTitle>
            <ArticleTime>apr 21, 2021</ArticleTime>
          </ArticleContent>
        </ArticleItem>
        <ArticleItem>
          <ArticleImage src="https://akcdn.detik.net.id/community/media/visual/2021/04/30/manchester-united-2_169.jpeg?w=700&q=90" />
          <ArticleContent>
            <ArticleTitle>Lorem ipsum dolor sit amet consectetur</ArticleTitle>
            <ArticleTime>apr 21, 2021</ArticleTime>
          </ArticleContent>
        </ArticleItem>
        <ArticleItem>
          <ArticleImage src="https://akcdn.detik.net.id/community/media/visual/2021/04/30/manchester-united-3_169.jpeg?w=700&q=90" />
          <ArticleContent>
            <ArticleTitle>Lorem ipsum dolor sit amet consectetur</ArticleTitle>
            <ArticleTime>apr 21, 2021</ArticleTime>
          </ArticleContent>
        </ArticleItem>
      </ArticleList>
    </StyledArticle>
  );
};

export default Article;
