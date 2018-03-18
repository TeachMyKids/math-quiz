import React from 'react';
import { Question, Answer, Keyboard } from 'components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { PropTypes } from 'prop-types';
import { toastr } from 'react-redux-toastr';

class MathContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      index: 0,
      rights: 0,
      wrongs: 0
    };

    this.onAnswer = this.onAnswer.bind(this);
    this.onResultChange = this.onResultChange.bind(this);
  }

  componentDidMount() {
    this.next();
  }

  next() {
    const index = Math.floor(Math.random() * this.props.data.length);

    this.keyboard.reset();

    this.setState({
      index,
      promoteValue: '',
      initialPromotedValue: ''
    });
  }

  onAnswer() {
    if (this.state.promoteValue === this.props.data[this.state.index][3]) {
      this.setState({
        rights: this.state.rights + 1
      });

      toastr.success('CHÚC MỪNG', 'BẠN ĐÃ TRẢ LỜI ĐÚNG');
    } else {
      this.setState({
        wrongs: this.state.wrongs + 1
      });

      toastr.error('SAI RỒI', 'BẠN CẦN HỌC BÀI VÀ LÀM BÀI CẨN THẬN HƠN');
    }

    this.next();
  }

  onResultChange(val) {
    this.setState({
      promoteValue: val
    });

    toastr.removeByType('success');
    toastr.removeByType('error');
  }

  render() {
    return (
      <Grid fluid>
        <Row style={{ marginTop: 80 }}>
          <Col xs={7}>
            <Question q={this.props.data[this.state.index]} />
          </Col>
          <Col xs={5}>
            <Answer promotedValue={this.state.promoteValue} />
          </Col>
        </Row>
        <Row style={{ margin: 20 }}>
          <Col xs={6} style={{ color: 'green', textAlign: 'center' }}>ĐÚNG: {this.state.rights}</Col>
          <Col xs={6} style={{ color: 'red', textAlign: 'center' }}>SAI: {this.state.wrongs}</Col>
        </Row>

        <Row style={{ background: '#ddd' }}>
          <Col xs={12}>
            <Keyboard
              onRef={ref => (this.keyboard = ref)}
              value={this.state.initialPromotedValue}
              onAnswer={this.onAnswer}
              onResultChange={this.onResultChange}
            />
          </Col>

        </Row>
      </Grid>
    );
  }
}

MathContainer.propTypes = {
  data: PropTypes.array.isRequired
};

export default MathContainer;
