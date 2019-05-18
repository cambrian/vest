import React, { useState } from 'react';
import { engineName, isSafari } from 'react-device-detect';

import AutosizeInput from 'react-input-autosize';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Select from 'react-select';
import Tooltip from 'react-bootstrap/Tooltip';

// Many sad hacks here for cross-browser consistency.
// Do not try this at home.
const tutorialSelectStyles = {
  control: (provided: object) => ({
    ...provided,
    background: 'transparent',
    border: 'none',
    'border-bottom': 'none',
    '&:hover': { 'border-bottom': 'none' },
    'border-radius': 0,
    boxShadow: 'none',
    'caret-color': 'transparent',
    color: 'white',
    height: engineName === 'WebKit' ? (isSafari ? '34px' : '35px') : '33.5px',
    'min-height':
      engineName === 'WebKit' ? (isSafari ? '34px' : '35px') : '33.5px',
    '& > *': {
      marginTop: engineName === 'WebKit' ? undefined : '-4px',
      marginBottom: isSafari ? undefined : 'auto'
    },
    marginLeft: -5,
    marginRight: -5
  }),
  dropdownIndicator: (provided: object) => ({
    ...provided,
    color: 'white',
    '&:hover': { color: 'white' }
  }),
  indicatorSeparator: (provided: object) => ({
    ...provided,
    backgroundColor: 'white',
    height: '15px',
    marginTop: 'auto',
    marginBottom: 'auto'
  }),
  singleValue: (provided: object) => ({
    ...provided,
    color: 'yellow',
    marginBottom: isSafari ? undefined : 'auto',
    maxWidth: undefined,
    position: undefined,
    transform: undefined
  }),
  option: (
    provided: object,
    { isSelected, isFocused }: { isSelected: boolean; isFocused: boolean }
  ) => ({
    ...provided,
    color: 'black',
    background: isSelected ? 'lightskyblue' : isFocused ? '#eee' : 'white',
    '&:active': {
      background: isSelected ? 'lightskyblue' : isFocused ? '#eee' : 'white'
    }
  })
};

interface TutorialSelectProps {
  options: object[];
  value: object;
}

const TutorialSelect: React.FC<TutorialSelectProps> = (
  props: TutorialSelectProps
) => (
  <div className="inline-select-wrapper">
    <Select {...props} isSearchable={false} styles={tutorialSelectStyles} />
  </div>
);

const Tutorial: React.FC = () => {
  const [step, setStep] = useState(1);
  return (
    <Row className="top-buffer">
      <Col className="order-md-12">
        {step === 1 && (
          <Form className="tutorial-form">
            <code>
              You are purchasing the rewards from staking{' '}
              <AutosizeInput
                className="autosize-input"
                type="text"
                value="3141.59"
                readOnly
                disabled
              />{' '}
              <TutorialSelect
                options={[
                  { value: 'XTZ', label: 'Tezzies' },
                  { value: 'ATOM', label: 'Cosmos' }
                ]}
                value={{ value: 'XTZ', label: 'Tezzies' }}
              />{' '}
              for a{' '}
              <TutorialSelect
                options={[
                  { value: '3', label: '3 month' },
                  { value: '6', label: '6 month' },
                  { value: '9', label: '9 month' }
                ]}
                value={{ value: '3', label: '3 month' }}
              />{' '}
              duration...{' '}
              <Button variant="dark" onClick={() => setStep(2)}>
                Continue
              </Button>
            </code>
          </Form>
        )}
        {step === 2 && (
          <Form className="tutorial-form">
            <code>
              ...which will cost you{' '}
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip className="tooltip-code" id={`tooltip-cost`}>
                    $75.50 as of May 17
                  </Tooltip>
                }
              >
                <span className="tutorial-highlight">0.0103 BTC</span>
              </OverlayTrigger>
              . At the current interest rate for staking, you are estimated to
              earn{' '}
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip className="tooltip-code" id={`tooltip-rewards`}>
                    $92.70 as of May 17
                  </Tooltip>
                }
              >
                <span className="tutorial-highlight">55.83 XTZ</span>
              </OverlayTrigger>{' '}
              in rewards (although this amount is liable to vary).
              <br />
              <br />
              Please enter your XTZ payout address:{' '}
              <AutosizeInput
                className="autosize-input"
                type="text"
                value="KT1VyvP..."
                readOnly
                disabled
              />{' '}
              <Button variant="dark" onClick={() => setStep(3)}>
                Submit
              </Button>
            </code>
          </Form>
        )}
        {step === 3 && (
          <code id="tutorial-confirm">
            Your staking contract has been confirmed!
            <br />
            <br />
            Please send <span className="tutorial-highlight">
              0.0103 BTC
            </span>{' '}
            to the following payment address within the next 24 hours:{' '}
            <span className="tutorial-highlight">1A1zP1e...</span>
            <br />
            <br />
            Once payment is confirmed, you should begin receiving the rewards
            from staking <span className="tutorial-highlight">
              3141.59 XTZ
            </span>{' '}
            for a <span className="tutorial-highlight">3 month</span> duration,
            paid out to your address beginning in{' '}
            <span className="tutorial-highlight">KT1VyvP</span>.
            <br />
            <br />
            Your order code is{' '}
            <span className="tutorial-highlight">7BE34C87DF</span>.
          </code>
        )}
      </Col>
      <Col md={{ span: 6 }} className="top-buffer-sm order-md-1">
        <Card
          className={'card-info ' + (step === 1 ? 'card-active' : '')}
          onClick={() => setStep(1)}
        >
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
        <Card
          className={
            'card-info top-buffer ' + (step === 2 ? 'card-active' : '')
          }
          onClick={() => setStep(2)}
        >
          <Card.Body>
            <Card.Title>
              <b>Step 2: Checkout</b>
            </Card.Title>
            <Card.Text>
              Review the quoted BTC price for your selected terms. If everything
              looks correct, submit a <i>payout address</i> for receiving your
              rewards.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className={
            'card-info top-buffer ' + (step === 3 ? 'card-active' : '')
          }
          onClick={() => setStep(3)}
        >
          <Card.Body>
            <Card.Title>
              <b>Step 3: Confirmation</b>
            </Card.Title>
            <Card.Text>
              After checkout, you'll see a <i>payment address</i> and an{' '}
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
    </Row>
  );
};

export default Tutorial;
