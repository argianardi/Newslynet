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

const ArticleSnippetCard: FC<Props> = ({
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
    <Card hoverable style={{ height: 500, position: 'relative' }}>
      <div onClick={onGotoArticleDetail} style={{ paddingBottom: 20 }}>
        {article.urlToImage && (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '0',
              paddingBottom: '56.25%',
            }}
          >
            <img
              src={article.urlToImage}
              alt={article.title}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        )}
        <p style={{ fontSize: 11 }} className="date">
          {moment(article.publishedAt).format('MMMM DD, YYYY')}
        </p>
        <h2
          className="title"
          style={{ fontSize: 14, width: '100%', wordWrap: 'break-word' }}
        >
          {article.title}
        </h2>
        <p className="desc" style={{ width: '100%', wordWrap: 'break-word' }}>
          {article.description}
        </p>
      </div>
      <div style={{ marginTop: -10, marginBottom: -15 }}>
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

export default ArticleSnippetCard;
