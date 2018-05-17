import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { items: state.items };
};

class ConnectedList extends Component {
  render() {
    const list = this.props.items.map((item, i) => <li key={i}>{item}</li>);
    return <div>{list}</div>;
  }
}

const List = connect(mapStateToProps)(ConnectedList);
export default List;
