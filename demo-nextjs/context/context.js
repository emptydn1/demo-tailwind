import { createContext, useReducer } from "react";

const ThemeContext = createContext(null);

const ACTION_TYPES = {
    SET_ARRAY: "SET_ARRAY",
};

const fetchData = (data) => {
    return { type: ACTION_TYPES.SET_ARRAY, payload: data };
};

const storeReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_ARRAY:
            return { ...state, post: action.payload };
        default:
            throw Error("error reducer");
    }
};
const ThemeProvider = ({ children }) => {
    const state = {
        post: [],
    };
    const [value, dispatch] = useReducer(storeReducer, state);

    return (
        <ThemeContext.Provider value={{ value, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { fetchData, ThemeContext, ThemeProvider };
