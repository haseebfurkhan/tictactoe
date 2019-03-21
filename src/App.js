import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xPlayer: true,
      boxes: Array(10).fill(""),
      styles: Array(10).fill("btn-floating btn-large waves-effect waves-light white")
    };
  }

  handleClick(i) {

    let boxesCache = this.state.boxes;
    let stylesCache = this.state.styles;
    let winner = this.calculateWinner(boxesCache);

    if (winner || boxesCache[i]) {
      return;
    }

    boxesCache[i] = this.state.xPlayer ? "clear" : "check_box_outline_blank";
    stylesCache[i] = this.state.xPlayer ? "btn-floating btn-large waves-effect waves-light blue" : "btn-floating btn-large waves-effect waves-light purple"
    this.setState({
      boxes: boxesCache,
      styles: stylesCache,
      xPlayer: !this.state.xPlayer
    });
  }

  calculateWinner(boxesCache) {
    const lines = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (boxesCache[a] && boxesCache[a] === boxesCache[b] && boxesCache[a] === boxesCache[c]) {
        return boxesCache[a];
      }
    }
    return null;
  }

  render() {

    let status;
    let winner = this.calculateWinner(this.state.boxes);
    if (winner) {
      status = "Winner: " + (winner === "clear" ? " x " : " ⬜ ");
    } else {
      status = "Next Player :" + (this.state.xPlayer ? " x " : " ⬜ ");
    }

    return (
      <div className="App">
        <div className="container">
          <h3 style={{ fontFamily: "monospace" }} className="col s12 brand-logo center black-text">Tic Tac Toe</h3>

          <div>
            <div className="row">
              <div className="col s3 offset-s1"> <Box value={this.state.boxes[1]} styleValue={this.state.styles[1]} onClick={i => this.handleClick(1)} /> </div>
              <div className="col s3"> <Box value={this.state.boxes[2]} styleValue={this.state.styles[2]} onClick={i => this.handleClick(2)} /> </div>
              <div className="col s3"> <Box value={this.state.boxes[3]} styleValue={this.state.styles[3]} onClick={i => this.handleClick(3)} /> </div>
            </div>
            <div className="row">
              <div className="col s3 offset-s1"> <Box value={this.state.boxes[4]} styleValue={this.state.styles[4]} onClick={i => this.handleClick(4)} /> </div>
              <div className="col s3"> <Box value={this.state.boxes[5]} styleValue={this.state.styles[5]} onClick={i => this.handleClick(5)} /> </div>
              <div className="col s3"> <Box value={this.state.boxes[6]} styleValue={this.state.styles[6]} onClick={i => this.handleClick(6)} /> </div>
            </div>
            <div className="row">
              <div className="col s3 offset-s1"> <Box value={this.state.boxes[7]} styleValue={this.state.styles[7]} onClick={i => this.handleClick(7)} /> </div>
              <div className="col s3"> <Box value={this.state.boxes[8]} styleValue={this.state.styles[8]} onClick={i => this.handleClick(8)} /> </div>
              <div className="col s3"> <Box value={this.state.boxes[9]} styleValue={this.state.styles[9]} onClick={i => this.handleClick(9)} /> </div>
            </div>
          </div>

          <h4 style={{ fontFamily: "monospace" }} className="col s12 brand-logo center black-text">
            {status}
          </h4>
        </div>
      </div>
    );
  }
}

class Box extends React.Component {
  render() {
    return (
      <button className={this.props.styleValue} onClick={this.props.onClick}><i className="material-icons">{this.props.value}</i></button>
    );
  }
}

export default App;
