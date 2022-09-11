import { Welcome } from "./Welcome";
import type { DataItem } from "./DataItem";
import { ChangeTitle } from "./ChangeTitle";

export default function App() {
    const data: DataItem[] = [
        { name: "Sara" },
        { name: "Cahal", id: 123, age: 30 },
    ];
    return (
        <div>
            {data.map((data: DataItem) => {
                return <Welcome {...data} />;
            })}
            <ChangeTitle />
        </div>
    );
}
