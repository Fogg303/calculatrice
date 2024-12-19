import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ListGroup variant="flush">
                <ListGroup.Item as={Link} to="/" className="text-primary">Accueil</ListGroup.Item>
                <ListGroup.Item as={Link} to="/profile">Mon Profil</ListGroup.Item>
                <ListGroup.Item>Abonnements</ListGroup.Item>
                <ListGroup.Item>Paramètres</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Sidebar;
