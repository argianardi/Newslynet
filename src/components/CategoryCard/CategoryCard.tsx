import { Card, Popconfirm } from 'antd';
import { FC } from 'react';
import moment from 'moment';

import { Article } from '../../types/article';

interface Props {
  article: Article;
  onGotoArticleDetail: () => void;
  onAddToArchive: () => void;
  onRemoveFromArchive: () => void;
  isArchived: boolean;
}

const CategoryCard: FC<Props> = ({
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
      <div onClick={onGotoArticleDetail} style={{ paddingBottom: 10 }}>
        <p style={{ fontSize: 11 }} className="date">
          {moment(article.publishedAt).format('MMMM DD, YYYY')}
        </p>
        <h2 className="title" style={{ fontSize: 14 }}>
          {article.title}
        </h2>
        <p className="desc">{article.description}</p>
      </div>
      <div style={{ marginBottom: -10 }}>
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

export default CategoryCard;
