import { FC, useEffect, useState } from 'react';
import { Col, Layout, Row } from 'antd';
import axios from 'axios';

import { Article } from '../types/article';
import CoverArticleCard from '../components/CoverArticleCard/CoverArticleCard';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import AppHeader from '../components/AppHeader/AppHeader';
import BestWeeklyArticleCard from '../components/BestWeeklyArticlesCard/BestWeeklyArticlesCard';

const { Header, Content, Footer } = Layout;

const Home: FC = () => {
  const [categorizedArticles, setCategorizedArticles] = useState<Article[]>([]);
  const [bestWeeklyArticles, setBestWeeklyArticles] = useState<Article[]>([]);
  const [coverArticle, setCoverArticle] = useState<Article | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<string>('business');

  useEffect(() => {
    getArticlesByCategory();
  }, [category]);

  useEffect(() => {
    getbestWeeklyArticles();
  }, []);

  useEffect(() => {
    if (categorizedArticles.length > 0) {
      setCoverArticle(categorizedArticles[0]);
    }
  }, [categorizedArticles]);

  const getArticlesByCategory = async () => {
    setLoading(true);
    await axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setCategorizedArticles(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getbestWeeklyArticles = async () => {
    await axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setBestWeeklyArticles(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <Header style={{ zIndex: 999 }}>
        <Row justify="center">
          <AppHeader />
        </Row>
      </Header>
      <Content className="content">
        <Row gutter={[16, 16]} justify="center">
          <Col span={24} lg={8}>
            <CoverArticleCard coverArticle={coverArticle || null} />
          </Col>
          <Col span={24} lg={8}>
            <div
              style={{
                backgroundColor: 'white',
                marginBottom: -10,
                paddingBottom: 30,
                paddingTop: 10,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <h3
                style={{
                  textTransform: 'capitalize',
                  margin: 0,
                  borderBottom: '1px solid black',
                  paddingBottom: 5,
                }}
                className="title"
              >
                {category} category
              </h3>
            </div>
            {categorizedArticles.map((article, index) => (
              <CategoryCard article={article} key={index} />
            ))}
          </Col>
          <Col span={24} lg={8} className="">
            <div
              style={{
                backgroundColor: 'white',
                marginBottom: -10,
                paddingBottom: 30,
                paddingTop: 10,
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <h3
                style={{
                  textTransform: 'capitalize',
                  margin: 0,
                  borderBottom: '1px solid black',
                  paddingBottom: 5,
                }}
                className="title"
              >
                Best Of The Week
              </h3>
            </div>
            {bestWeeklyArticles.map((article, index) => (
              <BestWeeklyArticleCard article={article} key={index} />
            ))}
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }} className="content">
        Newslynet ©2023 Created by Newslynet Group
      </Footer>
    </Layout>
  );
};

export default Home;
