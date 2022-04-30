import React from "react";

const Layouts = ({ children, xx }) => {
    return <div className={`container ${xx}`}>{children}</div>;
};

export default Layouts;
