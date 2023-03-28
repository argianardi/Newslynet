import { FC, useEffect, useState } from 'react';
import { Row, Col, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import {
  addToArchive,
  removeFromArchive,
} from '../utils/redux/features/archiveSlice';
import AppHeader from '../components/AppHeader/AppHeader';
import CoverArticleCard from '../components/CoverArticleCard/CoverArticleCard';
import { Article } from '../types/article';
import BestWeeklyArticlesCard from '../components/BestWeeklyArticlesCard/BestWeeklyArticlesCard';
import ArticleSnippetCard from '../components/ArticleSnippetCard/ArticleSnippetCard';
import { RootState } from '../utils/redux/store/store';

const ArticleDetail: FC = () => {
  const location = useLocation();
  const article = location.state;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [bestWeeklyArticles, setBestWeeklyArticles] = useState<Article[]>([]);
  const [topThreeArticles, setTopThreeArticles] = useState<Article[]>([]);
  const [otherArticles, setOtherArticles] = useState<Article[]>([]);

  const archivedArticles = useSelector(
    (state: RootState) => state.archive.articles
  );

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
    navigate(`/article/detail/${article.title}`, {
      state: article,
    });
  };

  const handleAddToArchive = (article: Article) => {
    dispatch(addToArchive(article));
  };

  const handleRemoveFromArchive = (article: Article) => {
    dispatch(removeFromArchive(article));
  };

  return (
    <Layout style={{ overflowX: 'hidden' }}>
      <Header style={{ zIndex: 999, marginBottom: 15 }}>
        <Row justify="center">
          <AppHeader hiddenCategory={false} />
        </Row>
      </Header>
      <Content className="content">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={15} lg={16} xl={15}>
            <div>
              <CoverArticleCard coverArticle={article} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={9} lg={8} xl={9}>
            {topThreeArticles.map((article, index) => {
              const isArchived = archivedArticles.some(
                (archivedArticle) => archivedArticle.title === article.title
              );
              return (
                <div key={index}>
                  <BestWeeklyArticlesCard
                    article={article}
                    onGotoArticleDetail={() => handleGoToArticleDetail(article)}
                    onAddToArchive={() => handleAddToArchive(article)}
                    onRemoveFromArchive={() => handleRemoveFromArchive(article)}
                    isArchived={isArchived}
                  />
                </div>
              );
            })}
          </Col>
        </Row>
        <Row gutter={[20, 16]} style={{ marginTop: 30 }}>
          <div
            style={{
              backgroundColor: 'white',
              marginBottom: -20,
              marginLeft: 10,
              marginRight: 10,
              paddingBottom: 15,
              borderTop: '2px solid black',
              width: '100%',
            }}
          >
            <h3
              style={{
                textTransform: 'capitalize',
                paddingLeft: 5,
              }}
              className="title"
            >
              Latest News
            </h3>
          </div>
          {otherArticles.map((article, index) => {
            const isArchived = archivedArticles.some(
              (archivedArticle) => archivedArticle.title === article.title
            );
            return (
              <Col key={index} xs={24} sm={12} md={8} lg={6} span={24}>
                <ArticleSnippetCard
                  article={article}
                  onGotoArticleDetail={() => handleGoToArticleDetail(article)}
                  onAddToArchive={() => handleAddToArchive(article)}
                  onRemoveFromArchive={() => handleRemoveFromArchive(article)}
                  isArchived={isArchived}
                />
              </Col>
            );
          })}
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }} className="content">
        Newslynet ©2023 Created by Newslynet Group
      </Footer>
    </Layout>
  );
};

export default ArticleDetail;
