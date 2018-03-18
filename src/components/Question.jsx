import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

class Question extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      q: this.props.q,
      statement: ''
    };
  }

  componentDidMount() {
    this.updateStatement(this.props.q);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.q !== this.state.q) {
      this.updateStatement(nextProps.q);
    }
  }

  updateStatement(q) {
    this.setState({
      statement: `${q[0]} ${q[1]} ${q[2]}`
    });
  }

  render() {
    const Qst = styled.h3`
      text-align: center;
      font-size: 50px;
      line-height: 30px;
      margin: 30px 0px;
    `;

    return (
      <Qst>{this.state.statement} = </Qst>
    );
  }
}

Question.propTypes = {
  q: PropTypes.array.isRequired
};

export default Question;
