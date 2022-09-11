import type { DataItem } from "./DataItem";

// const test = ((data: DataItem)=>{
//     return(
//         <div>
//             <div style={{display: data.name !== undefined ? "block" : "none"}}>Hello, {data.name}</div>
//         </div>
//     )
// });

//valueはobjectとしてみたときundefinedではない
//value.idはobjectの要素を指定するためundefind|number
const isUndefined = (value: DataItem) => {
    return value === undefined;
};

export const Welcome = ({ name, id, age }: DataItem) => {
    return (
        <div>
            {isUndefined({ name }) && <div>Hello, {name}</div>}
            {isUndefined({ id }) && <div>id: {id}</div>}
            {/* {name !== undefined && <div>Hello, {name}</div>}
            {id !== undefined && <div>id: {id}</div>}
            {age !== undefined && <div>age: {age}</div>} */}
        </div>
    );
};
