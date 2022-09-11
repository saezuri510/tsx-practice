import { useState } from "react";

export const ChangeTitle = () => {
    const [text, setText] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const changeText = () => {};
    return (
        <>
            <h1>タイトルの変更</h1>
            <form onSubmit={changeText}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button>変更</button>
            </form>
            <div>{text}</div>
        </>
    );
};
