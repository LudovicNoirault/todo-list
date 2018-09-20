import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";

var dest = document.querySelector("#container");

ReactDOM.render(
    <TodoList/>,
    dest
);