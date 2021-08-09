import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/counter/counterSlice";



const Counter = () => {
    const [amount, setAmount] = useState(3);
  const countValue = useSelector((state) => state.counter.value);
  console.log(countValue);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{countValue}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>

      <br /><br />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={()=> dispatch(incrementByAmount(amount))}>ıncrement by amount</button>
    </div>
  );
};

export default Counter;
