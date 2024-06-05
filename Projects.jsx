import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
    {
        title: 'E-commerce Application:-',
        description: 'A fully functional e-commerce platform with a product catalog, shopping cart, and checkout system.Incorporate features such as user authentication, payment processing, and order history.',
        image: 'src/images/ecomlensss.png', // i have to take screenshot and image here of my website
    },
    {
        title: 'Personal Website or Blog:-',
        description: 'A personal website that showcases your portfolio and achievements.',
        image: './src/images/portfolioss.png',
    },
    {
        title: 'To-Do List:-',
        description: 'A simple to-do list application with features such as task creation, editing, and deletion.Incorporate state management and local storage for persistence.',
        image: './src/images/todoss.jpg',
    },
    {
        title: 'Example(Social Media App)',
        description: 'A social media application that allows users to create accounts, post content, and interact with others.Implement features like user profiles, news feeds, likes, comments, and real-time chat.',
        image: './src/images/social.jpg',
    },
    {
        title: 'Example(Weather App)',
        description: 'A weather application that fetches data from an external API.Display the current weather, forecast, and other information for a given location.',
        image: './src/images/weather.webp',
    },
    {
        title: 'Example(Task Management Tool)',
        description: 'A task management application that helps users organize tasks and projects.Include features such as task creation, categorization, and progress tracking.',
        image: './src/images/taskmanagement.webp',
    },
    {
        title: 'Example(Real Estate Listing Platform)',
        description: 'A platform for buying and selling real estate properties.Features might include property listings, search filters, and contact forms.',
        image: './src/images/realestate.jpeg',
    },
    {
        title: 'Example(Portfolio Tracker)',
        description: 'An application to track investments and manage a portfolio.Include features such as tracking stock prices and generating performance reports.',
        image: './src/images/portfoliotracker.jpeg',
    },
    {
        title: 'Example(Game)',
        description: 'Create a simple game using JavaScript or a game framework.Examples include tic-tac-toe, snake, or a quiz game',
        image: './src/images/game.jpeg',
    },
    {
        title: 'Example(Blog Platform)',
        description: 'A blog platform that allows users to write, edit, and manage blog posts.Include features such as categories, tags, and user authentication.',
        image: './src/images/blog.jpg',
    },
    
];

const Projects = () => {
    return (
        <Container className="my-5">
            <h2 style={{color:"purple"}} className="text-center mb-4">My Projects</h2>
            <Row>
                {projects.map((project, index) => (
                    <Col md={6} lg={4} key={index} className="mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Projects;
