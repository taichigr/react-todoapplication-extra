import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

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
    const newIncompleteTodos = [...incompleteTodos, newCompleteTodos[index]];
    newCompleteTodos.splice(index, 1);
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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncompleteTodo
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
        onClickMoveHoryu={onClickMoveHoryu}
      />
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
      <CompleteTodo
        todos={horyuTodos}
        onClickMoveHoryu={onClickMoveHoryu}
        onClickRemove={onClickRemove}
      />
    </>
  );
};
