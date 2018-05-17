import React, { Component } from "react";
import Input from "./components/Input";
import List from "./components/List";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <Input />
        <List />
      </div>
    );
  }
}

export default App;
