import React, { useEffect, useState } from 'react';
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
    cursor: 'pointer',
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

const TutorialSelect: React.FC<any> = (props: any) => (
  <div className="inline-select-wrapper">
    <Select {...props} isSearchable={false} styles={tutorialSelectStyles} />
  </div>
);

const Tutorial: React.FC<{
  tutorialRef: React.MutableRefObject<any>;
}> = (props: { tutorialRef: React.MutableRefObject<any> }) => {
  const [step, setStep] = useState(1);
  const [stepChanged, setStepChanged] = useState(false);
  const [stakedAmount, setStakedAmount] = useState('1000.00');
  const [stakedCurrency, setStakedCurrency] = useState({
    value: 'XTZ',
    label: 'Tezzies'
  });
  const [stakedDuration, setStakedDuration] = useState({
    value: 3,
    label: '3 month'
  });
  const [paymentCurrency, setPaymentCurrency] = useState({
    value: 'BTC',
    label: 'BTC'
  });

  // Scroll to top of tutorial.
  useEffect(() => {
    if (props.tutorialRef.current !== null && stepChanged) {
      const tutorialTop = props.tutorialRef.current.getBoundingClientRect().top;
      window.scroll({ top: tutorialTop + window.scrollY - 20 });
      setStepChanged(false);
    }
  }, [props.tutorialRef, stepChanged]);

  // Set step and request scroll to start of tutorial.
  const setStepAndScroll = (newStep: number) => {
    if (newStep !== step) {
      setStep(newStep);
      setStepChanged(true);
    }
  };

  // Crimp inputs to 8 characters.
  const setStakedAmountOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const amount = event.target.value;
    if (amount.length <= 8) {
      setStakedAmount(amount);
    }
  };

  // Crimp input values on blur.
  const setStakedAmountOnBlur = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let amount = parseFloat(stakedAmount) || 1000;
    if (amount >= 100000 || amount <= 0) {
      amount = 1000;
    }
    setStakedAmount(amount.toFixed(2));
  };

  // Currency-specific properties.
  const dummyAddresses: { [index: string]: string } = {
    XTZ: 'KT1ExampleAddress',
    ATOM: 'cosmos1ExampleAddress'
  };
  const dummyPaymentAddresses: { [index: string]: string } = {
    BTC: '1A1zP1eP5QGefi2',
    ETH: '0xC02aaA39b223F'
  };
  const rates: { [index: string]: number } = {
    XTZ: 0.0059,
    ATOM: 0.0105
  };
  // As of 26 May 2019 on CoinMarketCap.
  const usdPrices: { [index: string]: number } = {
    BTC: 8730.59,
    ETH: 267.92,
    XTZ: 1.67,
    ATOM: 4.56
  };

  // Calculate compounded rewards using MPR.
  const symbol = stakedCurrency.value;
  const duration = stakedDuration.value;
  const rewards = parseFloat(stakedAmount) * rates[symbol] * duration;
  const rewardsUsd = rewards * usdPrices[symbol];

  // Calculate purchase price in BTC/USD.
  const contractDiscount = 0.6;
  const paymentSymbol = paymentCurrency.value;
  const purchasePriceUsd = contractDiscount * rewards * usdPrices[symbol];
  const purchasePricePay = purchasePriceUsd / usdPrices[paymentSymbol];

  return (
    <Row className="top-buffer">
      <Col className="order-md-12">
        <div id="tutorial-header" className="tutorial-highlight">
          Example:
        </div>
        <code>
          {step === 1 && (
            <Form className="tutorial-form">
              You are purchasing the rewards from staking{' '}
              <AutosizeInput
                className="autosize-input"
                type="text"
                value={stakedAmount}
                onChange={setStakedAmountOnChange}
                onBlur={setStakedAmountOnBlur}
              />{' '}
              <TutorialSelect
                options={[
                  { value: 'XTZ', label: 'Tezzies' },
                  { value: 'ATOM', label: 'Atoms' }
                ]}
                value={stakedCurrency}
                onChange={(value: { value: string; label: string }) =>
                  setStakedCurrency(value)
                }
              />{' '}
              for a{' '}
              <TutorialSelect
                options={[
                  { value: 3, label: '3 month' },
                  { value: 6, label: '6 month' },
                  { value: 9, label: '9 month' }
                ]}
                value={stakedDuration}
                onChange={(value: { value: number; label: string }) =>
                  setStakedDuration(value)
                }
              />{' '}
              duration...{' '}
              <Button variant="dark" onClick={() => setStepAndScroll(2)}>
                Continue
              </Button>
            </Form>
          )}
          {step === 2 && (
            <Form className="tutorial-form">
              ...which will cost you{' '}
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip className="tooltip-code" id={`tooltip-cost`}>
                    ${purchasePriceUsd.toFixed(2)} as of May 26
                  </Tooltip>
                }
              >
                <span className="tutorial-highlight">
                  {purchasePricePay.toPrecision(2)}
                </span>
              </OverlayTrigger>{' '}
              <TutorialSelect
                options={[
                  { value: 'BTC', label: 'BTC' },
                  { value: 'ETH', label: 'ETH' }
                ]}
                value={paymentCurrency}
                onChange={(value: { value: string; label: string }) =>
                  setPaymentCurrency(value)
                }
              />{' '}
              up front. You are currently estimated to earn{' '}
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip className="tooltip-code" id={`tooltip-rewards`}>
                    ${rewardsUsd.toFixed(2)} as of May 26
                  </Tooltip>
                }
              >
                <span className="tutorial-highlight">{rewards.toFixed(2)}</span>
              </OverlayTrigger>{' '}
              <span className="tutorial-highlight">{symbol}</span> in rewards
              (variable).
              <br />
              <br />
              Please enter your {symbol} payout address:{' '}
              <AutosizeInput
                className="autosize-input"
                type="text"
                value={dummyAddresses[symbol]}
                readOnly
              />{' '}
              <Button variant="dark" onClick={() => setStepAndScroll(3)}>
                Submit
              </Button>
            </Form>
          )}
          {step === 3 && (
            <div id="tutorial-confirm">
              Your staking contract has been confirmed!
              <br />
              <br />
              Please send{' '}
              <span className="tutorial-highlight">
                {purchasePricePay.toPrecision(2)} {paymentSymbol}
              </span>{' '}
              to the following payment address within the next 24 hours:{' '}
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip
                    className="tooltip-code"
                    id={`tooltip-example-address`}
                  >
                    Example Address
                  </Tooltip>
                }
              >
                <span className="tutorial-highlight">
                  {dummyPaymentAddresses[paymentSymbol]}
                </span>
              </OverlayTrigger>
              .
              <br />
              <br />
              Once payment is confirmed, you should begin receiving the rewards
              from staking{' '}
              <span className="tutorial-highlight">
                {stakedAmount} {symbol}
              </span>{' '}
              for a{' '}
              <span className="tutorial-highlight">{stakedDuration.label}</span>{' '}
              duration, paid out to your address beginning in{' '}
              <span className="tutorial-highlight">
                {dummyAddresses[symbol].substr(0, 9)}
              </span>
              .
              <br />
              <br />
              Your order code is{' '}
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip
                    className="tooltip-code"
                    id={`tooltip-example-order`}
                  >
                    Example Order Code
                  </Tooltip>
                }
              >
                <span className="tutorial-highlight">7GA3K9ME25B</span>
              </OverlayTrigger>
              .
            </div>
          )}
        </code>
      </Col>
      <Col
        id="tutorial-steps"
        md={{ span: 6 }}
        className="top-buffer-sm order-md-1"
      >
        <Card
          className={'card-info ' + (step === 1 ? 'card-active' : '')}
          onClick={() => setStepAndScroll(1)}
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
          onClick={() => setStepAndScroll(2)}
        >
          <Card.Body>
            <Card.Title>
              <b>Step 2: Checkout</b>
            </Card.Title>
            <Card.Text>
              Select a purchase currency and review the quoted price for your
              contract. If everything looks correct, submit a{' '}
              <i>payout address</i> for receiving your rewards.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          className={
            'card-info top-buffer ' + (step === 3 ? 'card-active' : '')
          }
          onClick={() => setStepAndScroll(3)}
        >
          <Card.Body>
            <Card.Title>
              <b>Step 3: Confirmation</b>
            </Card.Title>
            <Card.Text>
              After checkout, you'll see a <i>payment address</i> and an{' '}
              <i>order code</i>. Send the indicated amount of currency to this
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
