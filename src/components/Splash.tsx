import { NavLink, RouteComponentProps } from 'react-router-dom';

import Apply from './Apply';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Tutorial from './Tutorial';
import { useRef } from 'react';

const Splash: React.FC<RouteComponentProps> = () => {
  const tutorialRef = useRef<any>(null);

  return (
    <div>
      <Row className="top-buffer">
        <Col md={{ span: 8 }}>
          <Jumbotron>
            <h1>
              <b>Staking With Leverage</b>
            </h1>
            <h3>
              <span className="chevron">>></span> Earn rewards from the largest
              PoS miners.
            </h3>
            <hr id="splash-rule" />
            <p className="splash-description">
              Vest lets you purchase the rights to Proof-of-Stake (PoS) mining
              rewards.
            </p>
            <p className="splash-description">
              Capture profits{' '}
              <span className="splash-highlight">
                without locking your own funds
              </span>{' '}
              in a volatile asset. Take a{' '}
              <span className="splash-highlight">leveraged bet</span> by
              receiving the rewards of massive staking operations.
            </p>
            <p className="splash-description">
              By partnering with only the most reputable stakers, we offer you
              exceptional reliability and industry-leading profit margins. View
              our <NavLink to="/faq">FAQ</NavLink> for details!
            </p>
          </Jumbotron>
        </Col>
        <Col md={{ span: 4 }}>
          <Apply />
        </Col>
      </Row>
      <Row className="top-buffer-section">
        <Col ref={tutorialRef}>
          <h3 className="subheader">How It Works</h3>
          <Tutorial tutorialRef={tutorialRef} />
        </Col>
      </Row>
    </div>
  );
};

export default Splash;
