import React from "react";
import "./style.css";

const App = () => {
  return (
    <>
      <div className="input_area">
        <input id="add_text" placeholder="TODOを入力" />
        <button id="add_button">追加</button>
      </div>
      <div className="incomplete_area">
        <p className="title">未完了のTODO</p>
        <ul id="incomplete_list">
          <div className="list_row">
            <li>未完了タスク</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div >
      <div className="complete_area">
        <p className="title">完了のTODO</p>
        <ul id="complete_list">
          <div className="list_row">
            <li>完了済みタスク</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
    </>
  );
};
export default App;