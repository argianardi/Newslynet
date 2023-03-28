import { FC } from 'react';
import { Row, Col, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { useLocation } from 'react-router-dom';

import AppHeader from '../components/AppHeader/AppHeader';
import CoverArticleCard from '../components/CoverArticleCard/CoverArticleCard';

const ArticleDetail: FC = () => {
  const location = useLocation();
  const article = location.state;

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
            <CoverArticleCard coverArticle={article} />
          </Col>
          <Col xs={24} sm={24} md={9} lg={8} xl={9}>
            <div className="secondary-layout bh">
              Ini adalah layout kedua yang lebih kecil
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="article-cards-layout br">
              {/* Tambahkan kumpulan card artikel di sini */}
              <p>card article 1</p>
            </div>
            <div className="article-cards-layout br">
              {/* Tambahkan kumpulan card artikel di sini */}
              <p>card article 2</p>
            </div>
            <div className="article-cards-layout br">
              {/* Tambahkan kumpulan card artikel di sini */}
              <p>card article 3</p>
            </div>
            <div className="article-cards-layout br">
              {/* Tambahkan kumpulan card artikel di sini */}
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
