import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

const Apply: React.FC = () => (
  <Card className="card-info card-active card-static">
    <Card.Body>
      <Card.Title>
        <b>Join our alpha!</b>
      </Card.Title>
      <Card.Text>
        We're looking for users to purchase our initial run of staking
        contracts.
        <br />
        <br />
        Applications will be reviewed on a rolling basis, so please take a brief
        moment to tell us about your staking needs:
      </Card.Text>
      <a target="_" href="https://forms.gle/viP5yF9Aux5YmmU27">
        <Button id="apply" variant="primary">
          Apply Now
        </Button>
      </a>
    </Card.Body>
  </Card>
);

export default Apply;
