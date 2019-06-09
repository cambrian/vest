import Apply from './Apply';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

const About: React.FC<RouteComponentProps> = () => (
  <div className="info-root">
    <Row className="top-buffer">
      <Col md={{ span: 8 }}>
        <Jumbotron>
          <h1>About</h1>
          <p className="info-body-first">
            <b>Vest</b> is brought to you by{' '}
            <a target="_" href="https://cambrian.dev">
              Cambrian Tech
            </a>
            , a crypto-focused product lab. We're a Series A company backed by{' '}
            <a target="_" href="https://polychain.capital">
              Polychain Capital
            </a>
            ,{' '}
            <a target="_" href="https://a16z.com">
              a16z
            </a>
            , and{' '}
            <a target="_" href="https://www.1confirmation.com">
              1confirmation
            </a>{' '}
            (among others), and we're based out of downtown San Francisco.
          </p>
          <p>
            Our team of developers graduated from Stanford at one point. Their
            work experience includes companies like Google, Twitter, and Jane
            Street.
          </p>
          <p>
            We'd love to chat!
            <br />
            <a href="mailto:tech@cambrian.dev">tech@cambrian.dev</a>
          </p>
        </Jumbotron>
      </Col>
      <Col md={{ span: 4 }}>
        <Apply />
      </Col>
    </Row>
  </div>
);

export default About;
