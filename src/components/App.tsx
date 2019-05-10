import {
  Link,
  NavLink,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import About from './About';
import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Splash from './Splash';

const App: React.FC = () => {
  return (
    <Router basename="/vest">
      <Container className="top-buffer bottom-buffer">
        <Row>
          <Col>
            <h1 id="title">
              <Link to="">
                <Badge>Vest</Badge>
              </Link>
            </h1>
          </Col>
          <Col xs={{ span: 8 }} className="text-right my-auto">
            <h4 id="menu">
              <NavLink to="/" activeClassName="menu-active">
                <Badge>Home</Badge>
              </NavLink>
              ·
              <NavLink to="/about" exact activeClassName="menu-active">
                <Badge>About</Badge>
              </NavLink>
            </h4>
          </Col>
        </Row>
        <Route path="/" exact component={Splash} />
        <Route path="/about" component={About} />
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
    </Router>
  );
};

export default App;
