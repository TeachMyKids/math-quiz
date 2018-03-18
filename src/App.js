import React from 'react';
import { MathContainer } from 'components';
import ReduxToastr, { reducer as toastrReducer } from 'react-redux-toastr';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const reducers = {
  toastr: toastrReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer);

class App extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    let data = [];
    for (let i = 2; i <= 5; i++) {
      for (let j = 1; j <= 10; j++) {
        data.push([i, 'x', j, i * j]);
      }
    }

    for (let i = 2; i <= 5; i++) {
      for (let j = 1; j <= 10; j++) {
        data.push([i * j, ':', i, j]);
      }
    }

    this.state = {
      data
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-left"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
          />

          <MathContainer data={this.state.data} />
        </div>
      </Provider>
    );
  }
}

export default App;
