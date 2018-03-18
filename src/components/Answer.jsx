import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

class Answer extends React.Component {
  render() {
    const Answ = styled.h3`
      text-align: center;
      font-size: 50px;
      line-height: 30px;
      margin: 30px 0px;
      color: green;
    `;
    return (
      <Answ>{this.props.promotedValue}</Answ>
    );
  }
}

Answer.propTypes = {
  promotedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

Answer.defaultProps = {
  promotedValue: ''
};

export default Answer;
