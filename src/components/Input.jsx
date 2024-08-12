import React from "react";

function Input(props) {
    // function onChange(e){
    //     props.f2(e.target.value);
    // }

    // function onClickSubmit(){
    //     props.f1(props.data)
    // }

    return<div>
        {/* <input onChange={onChange} type="text" value={props.data} /> */}
        <input onChange={(e)=> props.f2(e.target.value)} type="text" value={props.data} />
        <button onClick={()=> props.f1(props.data)
        } ><span>Add</span>
        {/* <button onClick={onClickSubmit} ><span>Add</span> */}
        </button>
        </div>
}

        export default Input;