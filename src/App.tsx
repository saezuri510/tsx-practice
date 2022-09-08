import { Welcome } from "./Welcome";

export type DataItem = {
    name: string;
    id?: number;
    age?: number;
};

export function App() {
    const data: DataItem[] = [
        { name: "Sara", id: 456, age: 31 },
        { name: "Cahal", id: 123, age: 30 },
    ];
    return (
        <div>
            {data.map((data: DataItem) => {
                return (
                    <Welcome name={data.name} /*id={data.id} age={data.age}*/ />
                );
            })}
        </div>
    );
}
