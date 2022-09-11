import { useState } from "react";

export const ChangeTitle = () => {
    const [text, setText] = useState<string>("");

    const changeTitle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        document.title = text;
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
        </>
    );
};
