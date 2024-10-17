import React, { useState } from "react";
import Dropdown from "../components/Dropdown";


function DropDownPage(){

const [selection, setSelection] = useState(null);

const handleSelect = (option)=>{
    setSelection(option);
}

const options = [
    {lable:'Red', value:'red'},
    {lable:'Green', value:'green'},
    {lable:'Blue', value:'blue'}
]

console.log(options)
    return(
        <div className="flex">
<Dropdown options={options} value={selection} onChange={handleSelect}/>        </div>
    )
};

export default DropDownPage;