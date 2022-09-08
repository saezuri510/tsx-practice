import { Welcome } from "./Welcome";
import type { DataItem } from "./DataItem";

export default function App() {
    const data: DataItem[] = [
        { name: "Sara" },
        { name: "Cahal", id: 123, age: 30 },
    ];
    return (
        <div>
            {data.map((data: DataItem) => {
                return <Welcome name={data.name} id={data.id} age={data.age} />;
            })}
        </div>
    );
}
