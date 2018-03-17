import React from 'react';


class App extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      profile: {
        skills: []
      },
      experience: [],
      projects: []
    };
  }

  render() {
    return (
      <div className="wrapper">

      </div>
    );
  }
}

export default App;
