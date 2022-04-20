import { createContext, useState } from "react";
import useToggle from "../hooks/useToggle";

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
    const [Theme, setTheme] = useState();
    const [toggle, setToggle] = useToggle();

    const value = {
        Theme,
        setTheme,
        toggle,
        setToggle,
    };
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
