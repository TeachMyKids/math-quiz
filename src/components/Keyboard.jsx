import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { PropTypes } from 'prop-types';

class Keyboard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      result: 0
    };

    this.back = this.back.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  onNumberEnter(val) {
    const newVal = (this.state.result * 10) + val;
    this.setState({
      result: newVal
    });

    this.props.onResultChange(newVal);
  }

  back() {
    const newVal = Math.floor(this.state.result / 10);

    this.setState({
      result: newVal
    });

    this.props.onResultChange(newVal);
  }

  reset() {
    this.setState({
      result: 0
    });
  }

  render() {
    const Btn = styled.button`
      width: 100%;
      height: 50px;
      margin: 5px;
      font-size: 17px;
      font-weight: bold;
    `;

    const NumberButton = Btn.extend``;

    const BtnYes = Btn.extend`
      background: green;
      color: #fff;
    `;

    const BtnBack = Btn.extend`
      background: orange;
      color: #fff;
    `;
    return (
      <Grid fluid>
        <Row>
          <Col xs={4}>
            <NumberButton onClick={this.onNumberEnter.bind(this, 1)}>1</NumberButton>
          </Col>
          <Col xs={4}>
            <NumberButton onClick={this.onNumberEnter.bind(this, 2)}>2</NumberButton>
          </Col>
          <Col xs={4}>
            <NumberButton onClick={this.onNumberEnter.bind(this, 3)}>3</NumberButton>
          </Col>
        </Row>

        <Row>
          <Col xs={4}>
            <NumberButton onClick={this.onNumberEnter.bind(this, 4)}>4</NumberButton>
          </Col>
          <Col xs={4}>
            <NumberButton onClick={this.onNumberEnter.bind(this, 5)}>5</NumberButton>
          </Col>
          <Col xs={4}>
            <NumberButton onClick={this.onNumberEnter.bind(this, 6)}>6</NumberButton>
          </Col>
        </Row>

        <Row>
          <Col xs={4}>
            <NumberButton onClick={this.onNumberEnter.bind(this, 7)}>7</NumberButton>
          </Col>
          <Col xs={4}>
            <NumberButton onClick={this.onNumberEnter.bind(this, 8)}>8</NumberButton>
          </Col>
          <Col xs={4}>
            <NumberButton onClick={this.onNumberEnter.bind(this, 9)}>9</NumberButton>
          </Col>
        </Row>

        <Row>
          <Col xs={4}>
            <NumberButton onClick={this.onNumberEnter.bind(this, 0)}>0</NumberButton>
          </Col>
          <Col xs={4}>
            <BtnYes onClick={this.props.onAnswer}>=</BtnYes>
          </Col>
          <Col xs={4}>
            <BtnBack onClick={this.back}>&lt;=</BtnBack>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Keyboard.propTypes = {
  onResultChange: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onRef: PropTypes.func.isRequired
};

export default Keyboard;
