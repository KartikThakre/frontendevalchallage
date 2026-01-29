import React from "react";
import "./UndoCounter.css";

const UndoCounter = () => {
  const [count, setCount] = React.useState(0);
  const [history, setHistory] = React.useState([]);
  const [redoStack, setRedoStack] = React.useState([]);

  const addHistory = (action, before, after) => {
    setHistory([...history, `${action} (${before} -> ${after})`]);
  };

  const handleIncrement = () => {
    addHistory("+1", count, count + 1);
    setCount(count + 1);
    setRedoStack([]);
  };

  const handleDecrement = () => {
    addHistory("-1", count, count - 1);
    setCount(count - 1);
    setRedoStack([]);
  };

  const handleAdd = (amount) => {
    addHistory(`+${amount}`, count, count + amount);
    setCount(count + amount);
    setRedoStack([]);
  };

  const handleSubtract = (amount) => {
    addHistory(`-${amount}`, count, count - amount);
    setCount(count - amount);
    setRedoStack([]);
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    setRedoStack([...redoStack, { count, entry: history[history.length - 1] }]);
    setHistory(history.slice(0, -1));
    setCount(history.length > 1 ? parseInt(history[history.length - 2].split("-> ")[1].replace(")", "")) : 0);
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;
    const last = redoStack[redoStack.length - 1];
    setHistory([...history, last.entry]);
    setCount(last.count);
    setRedoStack(redoStack.slice(0, -1));
  };

  return (
    <>
      <h2>Undoable Counter</h2>
      <div className="buttons">
        <button className="undo-button" onClick={handleUndo}>Undo</button>
        <button className="redo-button" onClick={handleRedo}>Redo</button>
      </div>
      <div className="undo-counter-container">
        <button className="counter-button" onClick={handleDecrement}>-1</button>
        <button className="counter-button" onClick={() => handleSubtract(10)}>-10</button>
        <button className="counter-button" onClick={() => handleSubtract(100)}>-100</button>
        <p className="counter-display">{count}</p>
        <button className="counter-button" onClick={handleIncrement}>+1</button>
        <button className="counter-button" onClick={() => handleAdd(10)}>+10</button>
        <button className="counter-button" onClick={() => handleAdd(100)}>+100</button>
      </div>
      <div className="counter-history">
        <h3>History</h3>
        {history.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </>
  );
};

export default UndoCounter;
