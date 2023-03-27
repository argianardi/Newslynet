import { Card } from 'antd';
import { FC } from 'react';

import { Article } from '../../types/article';

interface Props {
  article: Article;
}

const CategoryCard: FC<Props> = ({ article }) => {
  return (
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
  );
};

export default CategoryCard;
