import React, {useState} from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>현재 카운터 값은 {value}  입니다!</p>
      <button onClick={() => setValue(value + 1)}>증가</button>
      <button onClick={() => setValue(value - 1)}>감수</button>
    </div>
  );
};

export default Counter;