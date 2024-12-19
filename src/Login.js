import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique de validation (api login)
        onLogin();
        navigate('/');
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Form onSubmit={handleSubmit} style={{ width: '300px' }}>
                <h3 className="text-center mb-4">Se connecter</h3>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Entrez votre email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group controlId="formPassword" className="mt-3">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Entrez votre mot de passe"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mt-4">
                    Se connecter
                </Button>
            </Form>
        </div>
    );
};

export default Login;
