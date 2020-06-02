import React, { Fragment, useState } from 'react';
import './App.css';

//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import LittleButton from "./components/LittleButton";
import DisplayIncrement from "./components/DisplayIncrement";

function App() {
  const [counter, setCounter] = useState(42);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);

  return (
    <Fragment>
        <div className="container">
            <InputTodo />
            <ListTodos />
            <LittleButton onClickFunction={incrementCounter}
                          increment={1} />
            <LittleButton onClickFunction={incrementCounter}
                          increment={5} />
            <LittleButton onClickFunction={incrementCounter}
                          increment={10} />
            <LittleButton onClickFunction={incrementCounter}
                          increment={100} />
            <DisplayIncrement message={counter} />
        </div>
    </Fragment>
  );
}

export default App;
