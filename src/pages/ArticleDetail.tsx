import { FC, useEffect, useState } from 'react';
import { Row, Col, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import AppHeader from '../components/AppHeader/AppHeader';
import CoverArticleCard from '../components/CoverArticleCard/CoverArticleCard';
import { Article } from '../types/article';
import BestWeeklyArticlesCard from '../components/BestWeeklyArticlesCard/BestWeeklyArticlesCard';

const ArticleDetail: FC = () => {
  const location = useLocation();
  const article = location.state;
  const navigate = useNavigate();

  const [bestWeeklyArticles, setBestWeeklyArticles] = useState<Article[]>([]);
  const [topThreeArticles, setTopThreeArticles] = useState<Article[]>([]);
  const [otherArticles, setOtherArticles] = useState<Article[]>([]);

  useEffect(() => {
    getbestWeeklyArticles();
  }, []);

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

  useEffect(() => {
    if (bestWeeklyArticles.length) {
      setTopThreeArticles(bestWeeklyArticles.slice(0, 3));
      setOtherArticles(bestWeeklyArticles.slice(3));
    }
  }, [bestWeeklyArticles]);

  const handleGoToArticleDetail = (article: Article) => {
    console.log(article);
    navigate(`/article/detail/${article.title}`, {
      state: article,
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
        <Row>
          <Col xs={24} sm={24} md={15} lg={16} xl={15}>
            <div className="col-right-spacing">
              <CoverArticleCard coverArticle={article} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={9} lg={8} xl={9}>
            {topThreeArticles.map((article) => (
              <div className="col-left-spacing">
                <BestWeeklyArticlesCard
                  article={article}
                  onGotoArticleDetail={() => handleGoToArticleDetail(article)}
                />
              </div>
            ))}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="article-cards-layout br">
              <p>card article 1</p>
            </div>
            <div className="article-cards-layout br">
              <p>card article 2</p>
            </div>
            <div className="article-cards-layout br">
              <p>card article 3</p>
            </div>
            <div className="article-cards-layout br">
              <p>card article 4</p>
            </div>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }} className="content">
        Newslynet ©2023 Created by Newslynet Group
      </Footer>
    </Layout>
  );
};

export default ArticleDetail;
