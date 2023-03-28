import { FC } from 'react';
import { Card } from 'antd';

import { Article } from '../../types/article';

interface Props {
  article: Article;
  onGotoArticleDetail: () => void;
}

const BestWeeklyArticlesCard: FC<Props> = ({
  article,
  onGotoArticleDetail,
}) => {
  return (
    <Card onClick={onGotoArticleDetail} hoverable style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: 5 }}>
          <p className="date" style={{ marginBottom: 2, fontSize: 11 }}>
            {article.publishedAt}
          </p>
          <h3
            className="title"
            style={{
              fontSize: 12,
              marginBottom: 4,
            }}
          >
            {article.title}
          </h3>
          <p className="link" style={{ marginBottom: 0 }}>
            Read more...
          </p>
        </div>
        <div style={{ width: 300, height: 120 }}>
          <img
            alt={article.title}
            src={article.urlToImage}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </Card>
  );
};

export default BestWeeklyArticlesCard;
