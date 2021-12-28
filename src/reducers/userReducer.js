import { GET_USER } from './actionType';

// استیت 
export const initialState = {
    users: []
};

export const userReducer = (state, action) => {
    // زمانیکه یک دیسپچ انجام میشود و درخواست به اینجا میآید طبق یک شرط چک میشود که کدام تایپ انجام شود
    // و طبق نیاز تغییراتی انجام میشود
    switch(action.type){
        case GET_USER:
            return{
                users: ["a, ", "b, ", "c, ", "d, ", "e, "]
            }

        default:
            return state;
    }
}