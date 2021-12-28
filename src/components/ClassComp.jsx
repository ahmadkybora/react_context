import React from 'react';
import UserContext from '../contexts/userContext';
import MyClassComp from './MyClassComp';

class ClassComp extends React.Component {
    render() { 
        return (
            <MyClassComp />
            );
    }
}
 
export default ClassComp;