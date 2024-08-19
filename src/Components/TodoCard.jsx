import React, { Children } from "react";

function TodoCard(props) {
  const { children, handleDeleteTodos, index, handleEditTodo} = props;
  return (
    <div>
      <li className="todoItem">
        {children}
        <div className="actionsContainer">
          <button>
            <i onClick={() => {
              handleEditTodo(index)
            }} className="fa-solid fa-pen-to-square"></i>
          </button>
          <button>
            <i
              onClick={() => {
                handleDeleteTodos(index);
              }}
              className="fa-solid fa-trash"
            ></i>
          </button>
        </div>
      </li>
    </div>
  );
}

export default TodoCard;
