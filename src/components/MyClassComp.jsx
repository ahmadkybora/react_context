import React from 'react';
import UserContext from '../contexts/userContext';

class MyClassComp extends React.Component {
    render() { 
        return (
            // برای دسترسی به داده ها از کامپوننت بالا دست از کانسومر استفاده میکنیم
            <UserContext.Consumer>
                {(user) => <div>{user.first_name}<br />{user.last_name}<br />{user.number}<br /></div> }
            </UserContext.Consumer>
            );
    }
}
 
export default MyClassComp;