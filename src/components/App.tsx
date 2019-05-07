import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Tutorial from './Tutorial';

const App: React.FC = () => (
  <Container className="top-buffer bottom-buffer">
    <Row>
      <Col>
        <h1 className="title">
          <Badge>Vest</Badge>
        </h1>
      </Col>
      <Col xs={{ span: 8 }} className="text-right my-auto">
        <h4 id="menu">
          <Badge>
            <a href="mailto:tech@cambrian.dev">Contact</a>
          </Badge>
          ·
          <Badge>
            <a target="_" href="https://github.com/cambrian">
              GitHub
            </a>
          </Badge>
        </h4>
      </Col>
    </Row>
    <Row className="top-buffer">
      <Col md={{ span: 8 }}>
        <Jumbotron>
          <h1>
            <b>Staking With Leverage</b>
          </h1>
          <h3>
            <span className="chevron">>></span> Earn dividends from the largest
            miners.
          </h3>
          <p>
            <br />
            Vest lets you purchase the rights to Proof-of-Stake (PoS) mining
            rewards, allowing you to capture staking profits{' '}
            <b>without locking up your personal funds</b>.
          </p>
          <p>
            By partnering with only the most reputable stakers, we offer you
            exceptional reliability and best-in-the-industry profit margins.
          </p>
        </Jumbotron>
      </Col>
      <Col md={{ span: 4 }}>
        <Card className="card-info card-active card-static">
          <Card.Body>
            <Card.Title>
              <b>Join our alpha!</b>
            </Card.Title>
            <Card.Text>
              We're looking for users to purchase our initial run of staking
              contracts, which are backed by Polychain Labs.
              <br />
              <br />
              Applications will be reviewed on a rolling basis, so please take a
              brief moment to tell us about your staking needs:
            </Card.Text>
            <Button variant="primary">Apply Now</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="top-buffer-section">
      <Col>
        <h3 className="subheader">How It Works</h3>
        <Tutorial />
      </Col>
    </Row>
    <Row id="footer">
      <Col>
        ©2019{' '}
        <a target="_" href="https://cambrian.dev">
          Cambrian Technologies
        </a>
        . All rights reserved.
      </Col>
    </Row>
  </Container>
);

export default App;
