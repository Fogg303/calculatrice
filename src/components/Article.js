import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Article = ({ article }) => {
    return (
        <Card className="my-3">
            <Card.Body>
                <Card.Title>{article.Titre_Articles}</Card.Title>
                <Card.Text>{article.Contenu_Articles}</Card.Text>
                <Button variant="primary">Commenter</Button>
            </Card.Body>
        </Card>
    );
}

export default Article;
