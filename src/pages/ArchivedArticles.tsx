import React from 'react';
import { Col, Layout, Row } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AppHeader from '../components/AppHeader/AppHeader';
import ArticleSnippetCard from '../components/ArticleSnippetCard/ArticleSnippetCard';
import { Article } from '../types/article';
import { RootState } from '../utils/redux/store/store';
import {
  addToArchive,
  removeFromArchive,
} from '../utils/redux/features/archiveSlice';

const ArchivedArticles = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const archivedArticles = useSelector(
    (state: RootState) => state.archive.articles
  );

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
        <Row gutter={[20, 16]}>
          {archivedArticles.map((article, index) => {
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

export default ArchivedArticles;
