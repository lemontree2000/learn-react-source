import React, { Component } from "react";
import Counter from "./Counter"; // redux

import ViewInfo from './JSX'; //
import KeyDemo from './key'; // key 优化
import Container from './demo'; // 属性优化
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter /> 
        {/* <ViewInfo/> */}
        {/* <KeyDemo/> */}
        {/* <Container/> */}
      </div>
    );
  }
}

export default App;
