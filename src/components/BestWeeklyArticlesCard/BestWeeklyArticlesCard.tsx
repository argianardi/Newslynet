import { FC } from 'react';
import { Card, Popconfirm } from 'antd';
import moment from 'moment';

import { Article } from '../../types/article';

interface Props {
  article: Article;
  onGotoArticleDetail: () => void;
  onAddToArchive: () => void;
  onRemoveFromArchive: () => void;
  isArchived: boolean;
}

const BestWeeklyArticlesCard: FC<Props> = ({
  article,
  onGotoArticleDetail,
  onAddToArchive,
  onRemoveFromArchive,
  isArchived,
}) => {
  const handleAddToArchive = () => {
    onAddToArchive();
  };

  const handleRemoveFromArchive = () => {
    onRemoveFromArchive();
  };

  return (
    <Card hoverable style={{ marginBottom: 20 }}>
      <div
        onClick={onGotoArticleDetail}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <div style={{ marginRight: 5 }}>
          <p className="date" style={{ marginBottom: 2, fontSize: 11 }}>
            {moment(article.publishedAt).format('MMMM DD, YYYY')}
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
        </div>
        {article.urlToImage && (
          <div style={{ width: 300, height: 120 }}>
            <img
              alt={article.title}
              src={article.urlToImage}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        )}
      </div>
      <div style={{ marginBottom: -15 }}>
        {!isArchived && (
          <Popconfirm
            title="Are you sure to add this article to archive?"
            onConfirm={handleAddToArchive}
            okText="Yes"
            cancelText="No"
          >
            <button className="link" style={{ marginRight: 10 }}>
              Add to archive
            </button>
          </Popconfirm>
        )}
        {isArchived && (
          <Popconfirm
            title="Are you sure to remove this article from archive?"
            onConfirm={handleRemoveFromArchive}
            okText="Yes"
            cancelText="No"
          >
            <button className="link">Remove from archive</button>
          </Popconfirm>
        )}
      </div>
    </Card>
  );
};

export default BestWeeklyArticlesCard;
