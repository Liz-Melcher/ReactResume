//WHEN I am presented with the Resume section
//THEN I see a link to a downloadable resume and a list of the developer’s proficiencies


import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MockResume from "../assets/MockResume.pdf"

function Resume() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2 className="text-center">Resume</h2>
          <p className="text-center">
            <Button 
              variant="primary" 
              href="{MockResume}" 
              download="MockResume.pdf"
              target="_blank"
              rel="noopener nonreferrer"
            >
              Download My Resume
            </Button>
          </p>

          <h3 className="mt-4">Front-end Proficiencies</h3>
          <ul className="list-group">
            <li className="list-group-item">HTML</li>
            <li className="list-group-item">CSS</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">JQuery</li>
            <li className="list-group-item">Responsive Design</li>
            <li className="list-group-item">React</li>
            <li className="list-group-item">Bootstrap</li>
          </ul>

          <h3 className="mt-4">Back-end Proficiencies</h3>
          <ul className="list-group">
            <li className="list-group-item">APIs</li>
            <li className="list-group-item">Node.js</li>
            <li className="list-group-item">Express</li>
            <li className="list-group-item">MySQL</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
