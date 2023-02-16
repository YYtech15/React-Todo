import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState(["aaa"]);
  const [completeTodos, setCompleteTodos] = useState(["aaa"]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const addTask = () => {
    if (todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };

  const deleteTask = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos);
  }

  return (
    <>
      <div className="input_area">
        <input id="add_text" placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button id="add_button" onClick={addTask}>追加</button>
      </div>
      <div className="incomplete_area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list_row">
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => deleteTask(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div >
      <div className="complete_area">
        <p className="title">完了のTODO</p>
        {completeTodos.map((todo) => {
          return (
            <div key={todo} className="list_row">
              <li>{todo}</li>
              <button>完了</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default App;