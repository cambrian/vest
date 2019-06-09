import Apply from './Apply';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

const FAQ: React.FC<RouteComponentProps> = () => (
  <div className="info-root">
    <Row className="top-buffer">
      <Col md={{ span: 8 }}>
        <Jumbotron>
          <h1>FAQ</h1>
          <p className="info-body-first">TODO.</p>
        </Jumbotron>
      </Col>
      <Col md={{ span: 4 }}>
        <Apply />
      </Col>
    </Row>
  </div>
);

export default FAQ;
