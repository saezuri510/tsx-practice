import { useEffect, useState } from "react";

export const ChangeTitle = () => {
    const [text, setText] = useState<string>("");
    const [title, setTitle] = useState<string>("未指定");

    const changeTitle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTitle(text);
        alert("The title was changed :" + text);
    };

    useEffect(() => {
        document.title = title;
    }, [title]);

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
            <div>現在のタイトル: {title}</div>
        </>
    );
};
