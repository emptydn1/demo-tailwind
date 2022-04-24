import React, { useState } from "react";

type propsInput = {
    value: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
    onHandleAdd: (e: any) => void;
};
const InputForm: React.FC<propsInput> = ({ value, setState, onHandleAdd }) => {
    return (
        <form onSubmit={onHandleAdd}>
            <input
                className="w-full border px-[20px] border-gray-400 p-2 focus:outline-none"
                type="text"
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setState(e.target.value)
                }
                placeholder="Username"
            />
            <button className="text-white">add</button>
        </form>
    );
};

type Todo = {
    id: string | number;
    todo: string;
    isDone: boolean;
};
const App: React.FC = () => {
    const [state, setState] = useState<string>("");
    const [todo, setTodo] = useState<Todo[]>([]);

    const handleAdd = (e: any) => {
        e.preventDefault();
        setTodo((pre) => [
            ...pre,
            { id: Math.random(), todo: state, isDone: true },
        ]);
    };

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-slate-600">
            <div className="flex py-2">
                <InputForm
                    value={state}
                    setState={setState}
                    onHandleAdd={handleAdd}
                />
            </div>

            {todo &&
                todo.map((e) => (
                    <div key={e.id} className="p-10 bg-white">
                        <div>{e.todo}</div>
                    </div>
                ))}
        </div>
    );
};

export default App;
