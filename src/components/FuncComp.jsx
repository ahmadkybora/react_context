import React, { useContext, useReducer } from "react";
import myAppContext from "../contexts/myAppContext";
import userContext from "../contexts/userContext";
import { GET_USER } from "../reducers/actionType";
import { userReducer, initialState } from "../reducers/userReducer";

// دسترسی در فانکشنال کامپوننت
const FuncComp = (props) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    // بوسیله متد زیر و بوسیله رویداد آنکلیک تیک دیسپچ انجام میدهیم
    const getAllUser = () => {
        dispatch({ type: GET_USER })
    }

    // بوسیله هوک useContext میتوان 
    // به context
    // مورد نظر دسترسی داشت بوسیله زیر
    const a = useContext(myAppContext);
    const b = useContext(userContext);
    return (
        <div>
            <p>functional component</p>
            {b.first_name}
            <br />
            {a.name.post}
            <hr />

            {/* {console.log(state)} */}
            <p>{ state.users ? state.users : "" }</p>

            <button onClick={getAllUser}>click</button>
        </div>
    );
}
 
export default FuncComp;