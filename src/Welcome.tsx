import type { DataItem } from "./DataItem";

export const Welcome: React.FC<DataItem> = ({ name, id, age }) => {
    return (
        <div>
            {name !== undefined && <div>Hello, {name}</div>}
            {id !== undefined && <div>id: {id}</div>}
            {age !== undefined && <div>age: {age}</div>}
        </div>
    );
};
