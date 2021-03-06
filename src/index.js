import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Welcome, Main } from './containers';

export class Root extends Component {
  constructor(){
    super();
    this.state = {
      started: false
    };
  }
  startWorkout = () => { // this way doesn't require .bind(this)
    this.setState({ started: true });
  }
  renderRoot(ComponentToRender) {
    return (
      <Provider store={store}>
        <ComponentToRender onStartWorkOut={this.startWorkout} />
      </Provider>
    )
  }
  render() {
    const { started } = this.state;
    return started ? this.renderRoot(Main) : this.renderRoot(Welcome);
  }
};
