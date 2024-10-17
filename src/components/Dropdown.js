import React from "react";

function Dropdown({options, value}){

    console.log(options)
    console.log(value)
    return(
        <div>
{JSON.stringify(options)}
{value}
        </div>
    )
};

export default Dropdown;