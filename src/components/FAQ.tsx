import { NavLink, RouteComponentProps } from 'react-router-dom';

import Apply from './Apply';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import React from 'react';
import Row from 'react-bootstrap/Row';

const FAQ: React.FC<RouteComponentProps> = () => (
  <div className="info-root">
    <Row className="top-buffer">
      <Col md={{ span: 8 }}>
        <Jumbotron>
          <h1>FAQ</h1>
          <p className="info-body-first faq-header">What is Vest?</p>
          <p>
            Vest lets you purchase the rights to Proof-of-Stake mining rewards.
            These purchases are known as 
            <span className="faq-highlight">staking contracts</span>. You’ll
            find a detailed description of staking contracts below, and be sure
            to check out the <NavLink to="/">demo</NavLink> on our front page!
          </p>
          <hr className="faq-rule" />
          <p className="faq-header">What is a staking contract?</p>
          <p>
            You pay: <span className="faq-math">X</span> tokens.
            <br />
            You receive: Rewards from staking 
            <span className="faq-math">Z</span> tokens for duration{' '}
            <span className="faq-math">T</span>.
          </p>
          <p>
            <i>Example:</i>
          </p>
          <p>
            Alice operates a staking firm, which stakes 10,000,000 Tezzies. The
            expected annual staking yield of Tezzies is ~7.5% (i.e. Alice
            expects to earn ~750,000 Tezzies a year). However, Alice's staking
            operation has fixed yearly bills to pay and needs some money
            up-front. Alice can sell the rights to her future staking rewards!
          </p>
          <p>
            Alice forms a staking contract with Bob, selling the rights to half
            of her staking rewards over the next year. Specifically, Bob pays
            Alice 
            <span className="faq-math">X</span> Tezzies and, in return, will
            receive the rewards of staking 5,000,000 Tezzies for 1 year, where 
            <span className="faq-math">X</span>
             is some price <span className="faq-math">&lt;=</span> 375,000
            Tezzies, with the discount accounting for Bob's risk and opportunity
            cost.
          </p>
          <hr className="faq-rule" />
          <p className="faq-header">
            How is buying a staking contract different than simply buying tokens
            and staking them yourself?
          </p>
          <p>
            Vanilla staking and staking contracts are different investments with
            distinct risk-reward profiles.
          </p>
          <p>
            In vanilla staking, a party stakes{' '}
            <span className="faq-math">Y</span> tokens and earns a staking
            reward, proportional to <span className="faq-math">Y</span>, per
            unit of time.
          </p>
          <p>
            In a staking contract, by contrast, a party purchases the rights to{' '}
            <span className="faq-highlight">someone else’s</span> staking
            rewards for some duration. Notably, the purchaser of a staking
            contract <span className="faq-highlight">(1)</span> does not need to
            stake tokens and <span className="faq-highlight">(2)</span> is not
            purchasing the rights to any underlying stake, just the staking
            rewards.
          </p>
          <p>
            <i>Example:</i>
          </p>
          <p>
            Suppose Alice has <span className="faq-highlight">$100</span> and
            wants to invest in Tezos staking rewards for 3 months. 
          </p>
          <ul>
            <li>
              <span className="faq-highlight">Vanilla Staking:</span> Alice
              purchases <span className="faq-math">Y</span> Tezzies ($100 worth)
              and stakes them for 3 months. Alice earns 
              <span className="faq-math">(r * Y)</span> Tezzies in rewards,
              where <span className="faq-math">r</span> is the Tezos staking
              yield rate for the 3 month duration. After 3 months, assuming no
              slashing, Alice additionally receives back her stake of{' '}
              <span className="faq-math">Y</span> Tezzies.
              <br />
              <br />
              <ul className="ul-indent">
                <li>
                  Starting Value = <span className="faq-math">Y</span> Tezzies
                  <br />
                </li>
                <li>
                  Final Value = <span className="faq-math">(Y + r * Y)</span>{' '}
                  Tezzies
                  <br />
                </li>
                <li>
                  Profit = Final <b>&ndash;</b> Starting ={' '}
                  <span className="faq-math">(r * Y)</span> Tezzies
                  <br />
                </li>
              </ul>
            </li>
            <br />
            <li>
              <span className="faq-highlight">Staking Contract:</span> Alice
              purchases a Tezos staking contract for{' '}
              <span className="faq-math">Y</span> Tezzies ($100 worth), which
              she pays up front to the staker. The staker then stakes 
              <span className="faq-math">Z</span> Tezzies for 3 months, and
              Alice earns <span className="faq-math">(r * Z)</span> Tezzies in
              rewards.
              <br />
              <br />
              <ul className="ul-indent">
                <li>
                  Starting Value = <span className="faq-math">Y</span> Tezzies
                  <br />
                </li>
                <li>
                  Final Value = <span className="faq-math">(r * Z)</span>{' '}
                  Tezzies
                  <br />
                </li>
                <li>
                  Profit = Final <b>&ndash;</b> Starting ={' '}
                  <span className="faq-math">(r * Z - Y)</span> Tezzies
                  <br />
                </li>
              </ul>
            </li>
          </ul>
          <p>
            The amount staked in the latter case (
            <span className="faq-math">Z</span>) should usually be greater than
            the amount staked in the former case (
            <span className="faq-math">Y</span>), since the purchaser of a
            staking contract only receives the staking yield and not the
            principal. Formally, a rational purchaser will only buy a staking
            contract if 
            <span className="faq-math">r * Z - Y &gt;= r * Y</span>, implying
            that 
            <span className="faq-math">Z &gt;= Y + Y / r</span>.
          </p>
          <p>
            Note that both currency risk (e.g. cashing out to dollars in the
            end) and staking yield variance can complicate the risk-reward
            analysis of staking contracts, and we encourage purchasers to think
            through some of these issues for themselves. 
            <span className="faq-highlight">
              Of course, we are always happy to help!
            </span>
          </p>
          <hr className="faq-rule" />
          <p className="faq-header">How are staking contracts priced?</p>
          <p>Recall the definition of a staking contract:</p>
          <ul>
            <li>
              You pay: <span className="faq-math">X</span> tokens.
            </li>
            <li>
              You receive: Rewards from staking 
              <span className="faq-math">Z</span> tokens for duration{' '}
              <span className="faq-math">T</span>.
            </li>
          </ul>
          <p>The price of a staking contract can be modeled as:</p>
          <ul>
            <li>
              <span className="faq-math">X</span> = the expected reward value of
              staking <span className="faq-math">Z</span> tokens for duration{' '}
              <span className="faq-math">T</span> &ndash; a discount for risk
              and opportunity cost
            </li>
          </ul>
          <p>Where:</p>
          <ul>
            <li>
              The risk is a combination of risk factors including: variance in
              token price and staking yield, counterparty risk, and other
              factors.
            </li>
            <li>
              The opportunity cost is due to the purchaser trading present value
              (<span className="faq-math">X</span>) for future value (rewards of
              staking <span className="faq-math">Z</span> for duration{' '}
              <span className="faq-math">T</span>).
            </li>
          </ul>
          <hr className="faq-rule" />
          <p className="faq-header">Why are staking contracts useful?</p>
          <p className="faq-highlight">For sellers (stakers):</p>
          <ul>
            <li>
              Increase your liquidity (trade future staking rewards for some
              present value).
            </li>
            <li>
              Reduce variance in revenue (trade highly variable staking rewards
              for some fixed value).
            </li>
          </ul>
          <p className="faq-highlight">For buyers:</p>
          <ul>
            <li>Avoid locking up funds as PoS collateral.</li>
            <li>Take leveraged bets on staking rewards.</li>
            <li>
              Make a novel crypto investment—with a distinct risk-reward
              profile—in an industry dominated by highly positively correlated
              assets.
            </li>
            <li>Profit from an appetite for risk and HODLing.</li>
          </ul>
          <hr className="faq-rule" />
          <p className="faq-header">Who is performing the staking?</p>
          <p>
            The staking will initially be performed by Vest in collaboration
            with{' '}
            <a href="https://polychain.capital" target="_">
              Polychain Labs
            </a>
            .
          </p>
          <p>
            Polychain Labs is one of the most extensive staking operations in
            the industry. They currently operate the largest Cosmos validator
            and non-foundation Tezos baker. Their security team hails from
            Coinbase, JPL, and Google (among others).
          </p>
          <p>
            As we scale, we plan to introduce more stakers—though we will always
            prioritize reliability and security.
          </p>
        </Jumbotron>
      </Col>
      <Col md={{ span: 4 }}>
        <Apply />
      </Col>
    </Row>
  </div>
);

export default FAQ;
