import React from 'react';
import './index.scss'

function App() {
  const [count, setCount] = React.useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  }
  const onClickMinus = () => {
    setCount(count - 1);
  }
  return (
    <div className="App">
      <div>
        <h2>Сколько же получится?хммм</h2>
        <h1>{count}</h1>
        <button onClickPlus={onClickPlus} className="minus">Похож на минус 1</button>
        <button onClickMinus={onClickMinus} className="plus">Похож на плюс 1</button>
      </div>
    </div>
  );
}

export default App;
