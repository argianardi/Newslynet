import { FC } from 'react';
import { Card } from 'antd';

import { Article } from '../../types/article';

interface Props {
  coverArticle: Article | null;
}

const CoverArticleCard: FC<Props> = ({ coverArticle }) => {
  const today = new Date();
  const day = today.toLocaleDateString('en-US', { weekday: 'long' });
  const date = today.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const currentDay = day;
  const currentDate = date;

  return (
    <Card>
      <div style={{ marginTop: -20, marginBottom: 20 }}>
        <h2 className="date" style={{ margin: 0, fontSize: 18 }}>
          {currentDay}
        </h2>
        <p className="date" style={{ marginTop: -5 }}>
          {currentDate}
        </p>
      </div>
      {coverArticle ? (
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
              src={coverArticle.urlToImage}
              alt={coverArticle.title}
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
            {coverArticle.publishedAt}
          </p>
          <h2 className="title" style={{ fontSize: 16 }}>
            {coverArticle.title}
          </h2>
          <p className="desc">{coverArticle.description}</p>
          <p className="desc">{coverArticle.content}</p>
          <a
            className="link"
            href={coverArticle.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Continue Reading
          </a>
        </>
      ) : (
        <p>No cover article found.</p>
      )}
    </Card>
  );
};

export default CoverArticleCard;
