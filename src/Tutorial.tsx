import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import React from 'react';
import Row from 'react-bootstrap/Row';

const Tutorial: React.FC = () => {
  // TODO.
  return (
    <Row className="top-buffer">
      <Col md={{ span: 6 }}>
        <Card className="card-info card-active">
          <Card.Body>
            <Card.Title>
              <b>Step 1: Select Terms</b>
            </Card.Title>
            <Card.Text>
              Select a token, amount to stake, and duration to stake. These are
              the <i>terms</i> of your staking contract.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-info top-buffer">
          <Card.Body>
            <Card.Title>
              <b>Step 2: Checkout</b>
            </Card.Title>
            <Card.Text>
              Review the quoted BTC price for your selected terms. If everything
              looks correct, submit a <i>payout address</i> for rewards.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-info top-buffer">
          <Card.Body>
            <Card.Title>
              <b>Step 3: Confirmation</b>
            </Card.Title>
            <Card.Text>
              After checkout, you'll see a <i>payment address</i> and an
              <i>order code</i>. Send the indicated amount of BTC to this
              address within 24 hours (or you'll have to checkout again).
              <br />
              <br />
              Once the payment is fulfilled, watch the rewards roll in to your
              payout address! You can sit back and relax, but if you have any
              further questions, simply contact us with your order code.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="card-info card-static card-bright top-buffer-sm">
          <Card.Body>
            <Card.Title>
              <b>Placeholder Form</b>
            </Card.Title>
            <Card.Text>
              <Form>
                <Form.Group controlId="formToken">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary">Submit</Button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Tutorial;
