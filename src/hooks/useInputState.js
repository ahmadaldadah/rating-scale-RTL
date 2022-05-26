import {useState} from "react";

function useInputState(initialVal){
    const [value , setValue] = useState("");

    const handelChange = e =>{
        setValue(e.target.value);
    };
    return [ value , handelChange];
};
export default useInputState
