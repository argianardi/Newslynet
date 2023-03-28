import { FC } from 'react';
import { Card } from 'antd';
import moment from 'moment';

import { Article } from '../../types/article';

interface Props {
  article: Article;
  onGotoArticleDetail: () => void;
}

const ArticleSnippetCard: FC<Props> = ({ article, onGotoArticleDetail }) => {
  return (
    <Card onClick={onGotoArticleDetail} hoverable style={{ height: 500 }}>
      {article ? (
        <>
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
        </>
      ) : (
        <p>No article found.</p>
      )}
    </Card>
  );
};

export default ArticleSnippetCard;
