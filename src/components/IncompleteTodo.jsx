import React from "react";

export const IncompleteTodo = (props) => {
  const { todos, onClickComplete, onClickDelete, onClickMoveHoryu } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
              <button onClick={() => onClickMoveHoryu(index)}>保留へ</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};