import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { decreaseAsync, increaseAsync } from "./modules/counter";

function App() {
    const dispatch = useDispatch();
    const counter = useSelector((_) => _.counter);
    const onIncrease = useCallback(() => dispatch(increaseAsync()), []);
    const onDecrease = useCallback(() => dispatch(decreaseAsync()), []);
    return (
        <div className="App">
            <header className="App-header">
                <h1>{counter}</h1>
                <button onClick={onIncrease}>1+</button>
                <button onClick={onDecrease}>1-</button>
            </header>
        </div>
    );
}

export default App;
