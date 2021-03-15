import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [horyuTodos, setHoryuTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, newCompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  const onClickMoveHoryu = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    const newHoryuTodos = [...horyuTodos, newIncompleteTodos[index]];
    newIncompleteTodos.splice(index, 1);
    setHoryuTodos(newHoryuTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  const onClickMoveIncomplete = (index) => {
    const newHoryuTodos = [...horyuTodos];
    const newIncompleteTodos = [...incompleteTodos, newHoryuTodos[index]];
    newHoryuTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    setHoryuTodos(newHoryuTodos);
  };
  const onClickRemove = (index) => {
    const newHoryuTodos = [...horyuTodos];
    newHoryuTodos.splice(index, 1);
    setHoryuTodos(newHoryuTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
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
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="horyu-area">
        <p className="title">保留のTODO</p>
        <ul>
          {horyuTodos.map((todo, index) => {
            return (
              <div key="todo" className="list-row">
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
    </>
  );
};
