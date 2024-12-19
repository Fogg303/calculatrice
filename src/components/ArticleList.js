import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map(article => (
        <Card key={article.id} className="mb-3">
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.content}</Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ArticleList;
