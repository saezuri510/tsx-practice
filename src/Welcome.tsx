import type { DataItem } from "./DataItem";

// const isUndefined = (value)=>{
//     return value !== undefined;
// }

export const Welcome: React.FC<DataItem> = ({ name, id, age }) => {
    return (
        <div>
            {/* {isUndefined(name) && <div>Hello, {name}} */}
            {name !== undefined && <div>Hello, {name}</div>}
            {id !== undefined && <div>id: {id}</div>}
            {age !== undefined && <div>age: {age}</div>}
        </div>
    );
};
