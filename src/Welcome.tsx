import type { DataItem } from "./DataItem";

// const test = ((data: DataItem)=>{
//     return(
//         <div>
//             <div style={{display: data.name !== undefined ? "block" : "none"}}>Hello, {data.name}</div>
//         </div>
//     )
// });

// const isUndefined = ((value: ~~)=>{
//     return value !== undefined;
// });

export const Welcome: React.FC<DataItem> = ({ name, id, age }) => {
    return (
        <div>
            {name !== undefined && <div>Hello, {name}</div>}
            {id !== undefined && <div>id: {id}</div>}
            {age !== undefined && <div>age: {age}</div>}
        </div>
    );
};
