import React from "react";

export const CompleteTodo = (props) => {
  const { todos, onClickMoveIncomplete, onClickRemove } = props;
  return (
    <div className="horyu-area">
      <p className="title">保留のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickMoveIncomplete(index)}>
                未完了へ
              </button>
              <button onClick={() => onClickRemove(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
