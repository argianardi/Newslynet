import { Card } from 'antd';
import { FC } from 'react';
import moment from 'moment';

import { Article } from '../../types/article';

interface Props {
  article: Article;
  onGotoArticleDetail: () => void;
}

const CategoryCard: FC<Props> = ({ article, onGotoArticleDetail }) => {
  return (
    <Card onClick={onGotoArticleDetail} hoverable style={{ marginBottom: 20 }}>
      <p style={{ fontSize: 11 }} className="date">
        {moment(article.publishedAt).format('MMMM DD, YYYY')}
      </p>
      <h2 className="title" style={{ fontSize: 14 }}>
        {article.title}
      </h2>
      <p className="desc">{article.description}</p>
      <p className="link">Read more...</p>
    </Card>
  );
};

export default CategoryCard;
