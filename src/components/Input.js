import React, { Component } from "react";
import { connect } from "react-redux";
import { updateItem, addTodo } from "./../ducks/todo";

const mapStateToProps = state => {
  return { item: state.item };
};

const mapDispatchToProps = dispatch => {
  return {
    updateItem: e => dispatch(updateItem(e)),
    addTodo: () => dispatch(addTodo())
  };
};

class ConnectedInput extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="item"
          name={this.props.item}
          onChange={this.props.updateItem}
        />
        <input type="submit" name="Submit" onClick={this.props.addTodo} />
      </div>
    );
  }
}

const Input = connect(null, mapDispatchToProps)(ConnectedInput);
export default Input;
