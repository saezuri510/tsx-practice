// import type { DataItem } from "./App";

type test = {
    name: string;
};

export const Welcome: React.FC<test> = ({ name /*, id, age*/ }) => {
    <div>
        <div>Hello, {name}</div>
        {/* <div>{id}</div>
        <div>{age}</div> */}
    </div>;
};
