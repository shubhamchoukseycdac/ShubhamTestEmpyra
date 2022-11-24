import React, { Component } from "react";
import AllTodoItem from "./AllTodoItem";
import PropTypes from "prop-types";

class AllTodos extends Component {
  render() {
    return this.props.alltodos.map((alltodo) => (
      <AllTodoItem
        key={alltodo.id}
        alltodo={alltodo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

//PropTypes
AllTodos.propTypes = {
  alltodos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default AllTodos;
