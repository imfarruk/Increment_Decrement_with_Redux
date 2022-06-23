import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./redux/action/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);

  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment and Decrement</h1>
        <p>We will perform operation with a button</p>
        <div className="box">
          <button className="inc_min" onClick={() => dispatch(decNumber())}>
            <span>-</span>
          </button>
          <input className="inputfield" type="text" value={myState} disabled />
          <button className="inc_plus" onClick={() => dispatch(incNumber())}>
            <span>+</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
