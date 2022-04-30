import React, { createContext, useState } from "react";
// import useToggle from "../hooks/useToggle";

// type ITodoContext = {
//     dataRoot: {};
//     setDataRoot: () => void;
//     toggle: boolean;
//     setToggle: () => void;
// };

const ThemeContext = createContext<null | any>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [dataRoot, setDataRoot] = useState({});
    // const [toggle, setToggle] = useToggle();

    const state = {
        dataRoot,
        setDataRoot,
        // toggle,
        // setToggle,
    };

    console.log(state);
    return (
        <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
