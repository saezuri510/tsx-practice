import { useState } from "react";

export const ChangeTitle = () => {
    const [text, setText] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const changeTitle = (e) => {
        e.preventDefault();
        setTitle(text);
    };
    return (
        <>
            <p>タイトルの変更</p>
            <form onSubmit={changeTitle}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button>変更</button>
            </form>
            <div>{title}</div>
        </>
    );
};
