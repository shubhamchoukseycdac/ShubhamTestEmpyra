import React, { Component } from "react";
import PropTypes from "prop-types";

export class AllTodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.alltodo.completed ? "line-through" : "none",
    };
  };
  btnStyle = ()=> {
    return {
    color: "white",
    align: "center",
    background: this.props.alltodo.completed ? "#4CAF50" : "#f44336",
    border: "none",
    padding: "5px 9px",
    display: "inline-block",
   
    cursor: "pointer",
    float: "right",
    };
  };
  
  render() {
    const { id, title } = this.props.alltodo;
    const buttontext = this.props.alltodo.completed ? "Done" : "To Do"
    return (
      <div style={this.getStyle()}>
        <p>
          {id} {title}
          <button
            onClick={this.props.delTodo.bind(this, id)}
            style={this.btnStyle()}
          >
            {buttontext}
          </button>
        </p>
      </div>
    );
  }
}

//PropTypes
AllTodoItem.propTypes = {
  alltodo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

// const btnStyle = {
//   background: "#f44336",
//   color: "#fff",
//   border: "none",
//   padding: "5px 9px",
//   display: "inline-block",
 
//   cursor: "pointer",
//   float: "right",
// };

export default AllTodoItem;
