import { useRef, useState } from "react";

export const useFormState = (init = "", fn = false) => {
    const [state, setState] = useState(init);
    const typingTimeOut = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(() => value);

        if (!fn) return;
        if (typingTimeOut.current) clearTimeout(typingTimeOut.current);

        typingTimeOut.current = setTimeout(() => {
            // setState(() => value);
            // console.log("lol");
        }, 500);
    };

    const reset = () => {
        setState("");
    };

    return [state, handleChange, reset];
};
