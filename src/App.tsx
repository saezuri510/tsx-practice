import { Welcome } from "./Welcome";

type DataItem = {
    name: string;
    id?: number;
    age?: number;
};

const data: DataItem[] = [
    { name: "Sara" },
    { name: "Cahal", id: 123, age: 30 },
];

function App() {
    return (
        <div>
            {data.map((value) => {
                return <Welcome value={value} />;
            })}
        </div>
    );
}

export default App;
