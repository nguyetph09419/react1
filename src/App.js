import React from "react";
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1
    };
  }
  countDown() {
    this.setState({
      index: this.state.index - 1
    });
  }
  countUp(){
    this.setState((prevState, props) => {
      return {
        index: prevState.index + 1
      }
    });
  }
  render() {
    return (
      <div>
        <p>Giá trị: {this.state.index}</p>
        <button onClick={() => this.countDown()}>Down</button>
        <button onClick={() => this.countUp()}>Up</button>
      </div>
    );
  }
}
 
export default App;