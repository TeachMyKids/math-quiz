import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Summary extends Component {
  render() {
    const { profile } = this.props;

    if (!profile.summary) {
      return <div />;
    }

    return (
      <section className="section summary-section">
        <h2 className="section-title">
          <i className="fa fa-user" />
          Career Profile
        </h2>
        <div className="summary">
          <p>{ profile.summary[0] }</p>
          <p>{ profile.summary[1] }</p>
          <p>{ profile.summary[2] }</p>
        </div>
      </section>
    );
  }
}

Summary.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Summary;
