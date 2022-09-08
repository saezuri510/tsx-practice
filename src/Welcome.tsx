import type { DataItem } from "./DataItem";

const IsUndefined = (value: string | number | undefined) => {
    return value !== undefined;
};

export const Welcome: React.FC<DataItem> = ({ name, id, age }) => {
    return (
        <div>
            {IsUndefined(name) && <div>Hello, {name}</div>}
            {IsUndefined(id) && <div>id: {id}</div>}
            {IsUndefined(age) && <div>age: {age}</div>}
        </div>
    );
};
