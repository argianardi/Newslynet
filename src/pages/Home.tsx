import { FC, useEffect, useState } from 'react';
import { Col, Layout, Row } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { RootState } from '../utils/redux/store/store';
import {
  addToArchive,
  removeFromArchive,
} from '../utils/redux/features/archiveSlice';
import { Article } from '../types/article';
import CoverArticleCard from '../components/CoverArticleCard/CoverArticleCard';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import AppHeader from '../components/AppHeader/AppHeader';
import BestWeeklyArticleCard from '../components/BestWeeklyArticlesCard/BestWeeklyArticlesCard';

const { Header, Content, Footer } = Layout;

const Home: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [categorizedArticles, setCategorizedArticles] = useState<Article[]>([]);
  const [bestWeeklyArticles, setBestWeeklyArticles] = useState<Article[]>([]);
  const [coverArticle, setCoverArticle] = useState<Article | undefined>(
    undefined
  );
  const [category, setCategory] = useState<string>('business');

  const archivedArticles = useSelector(
    (state: RootState) => state.archive.articles
  );

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
    await axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setCategorizedArticles(response.data.articles);
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

  const handleGoToArticleDetail = (article: Article) => {
    navigate(`/article/detail/${article.title}`, {
      state: article,
    });
  };

  const handleCategory = (category: string) => {
    setCategory(category);
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
          <AppHeader hiddenCategory={true} onHandleCategory={handleCategory} />
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
            {categorizedArticles.map((article, index) => {
              const isArchived = archivedArticles.some(
                (archivedArticle) => archivedArticle.title === article.title
              );
              return (
                <CategoryCard
                  article={article}
                  key={index}
                  onGotoArticleDetail={() => handleGoToArticleDetail(article)}
                  onAddToArchive={() => handleAddToArchive(article)}
                  onRemoveFromArchive={() => handleRemoveFromArchive(article)}
                  isArchived={isArchived}
                />
              );
            })}
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
            {bestWeeklyArticles.map((article: Article, index: number) => {
              const isArchived = archivedArticles.some(
                (archivedArticle) => archivedArticle.title === article.title
              );

              return (
                <BestWeeklyArticleCard
                  article={article}
                  key={index}
                  onGotoArticleDetail={() => handleGoToArticleDetail(article)}
                  onAddToArchive={() => handleAddToArchive(article)}
                  onRemoveFromArchive={() => handleRemoveFromArchive(article)}
                  isArchived={isArchived}
                />
              );
            })}
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
