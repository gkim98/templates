import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import { add, remove } from './actions/list';

class App extends Component {
  state = {
    inputValue: ''
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  addItem = () => {
    this.props.dispatch(add(this.state.inputValue))
    this.setState({
      inputValue: ''
    });
  }

  removeItem = () => {
    this.props.dispatch(remove(this.state.inputValue))
    this.setState({
      inputValue: ''
    });
  }

  displayItems = () => {
    let items = this.props.list.map((item, i) => {
      return <p key={i}>{item}</p>
    });
    return items;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Redux Template</h1>
        </header>
        <input 
          value={this.state.inputValue} 
          onChange={evt => this.updateInputValue(evt)}></input>
        <button onClick={this.addItem}>Add</button>
        <button onClick={this.removeItem}>Remove</button>
        <div>
          {
            this.displayItems()
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    objectList: state.objectList,
    options: state.options
  };
};

export default connect(mapStateToProps)(App);

