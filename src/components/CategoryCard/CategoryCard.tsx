import { Card } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Article } from '../../types/article';

interface Props {
  article: Article;
  onGotoArticleDetail: () => void;
}

const CategoryCard: FC<Props> = ({ article, onGotoArticleDetail }) => {
  return (
    <Link to={`/article/detail/${article.title}`}>
      <Card hoverable style={{ marginBottom: 20 }}>
        <p style={{ fontSize: 11 }} className="date">
          {article.publishedAt}
        </p>
        <h2 className="title" style={{ fontSize: 14 }}>
          {article.title}
        </h2>
        <p className="desc">{article.description}</p>
        <a className="link" href={article.url}>
          Read more...
        </a>
      </Card>
    </Link>
  );
};

export default CategoryCard;
