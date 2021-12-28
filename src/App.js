import React, { Component } from 'react';
import ClassComp from './components/ClassComp';
import FuncComp from './components/FuncComp';
import UserContext from './contexts/userContext';
import { user } from './contexts/userContext';

class App extends Component {
  // میتوان داده ها را ازهمینجا وارد کرد
  // state = { current: { name: 'ali' }}
  // میتوان به این صورت به کانتکس دسترسی داشت و داد ها را وارد استیت محلی کرد 
  state = {
    user,
  }
  // میتوان بعد از مانت شدن کامپوننت داده ها را از کانتکست گرفت و در استیت محلی ذخیره کرد
  componentDidMount() {
    this.setState({user})
  }

  render() {
    return (
        // شیر کردن داده ها به کامپوننت های چیلدرن به وسیله پروواید و پراپرتی ولیو
        <div>
          <UserContext.Provider value={this.state.user} >
            <ClassComp />
          </UserContext.Provider>
          <FuncComp />
        </div>
    );
  }
}

export default App;
