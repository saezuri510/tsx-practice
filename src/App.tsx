import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
    margin: 16px 0;
`;

function App() {
    const [count, setCount] = useState<number>(0);
    const add = () => {
        setCount((prev) => prev + 1);
    };
    const doubleAdd = () => {
        add();
        add();
    };

    return (
        <div className="App">
            {count === 3 ? (
                <>
                    <Button onClick={() => setCount(0)}>clear!</Button>
                    <br />
                </>
            ) : (
                <p>You clicked {count} times</p>
            )}
            <button onClick={add}>+1</button>
            <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={doubleAdd}>Double Add</button>
        </div>
    );
}

export default App;
