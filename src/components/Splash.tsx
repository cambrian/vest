import Apply from './Apply';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Tutorial from './Tutorial';

const Splash: React.FC = () => (
  <div>
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
        <Apply />
      </Col>
    </Row>
    <Row className="top-buffer-section">
      <Col>
        <h3 className="subheader">How It Works</h3>
        <Tutorial />
      </Col>
    </Row>
  </div>
);

export default Splash;
