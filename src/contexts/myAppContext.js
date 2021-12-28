import React from 'react';
// میتوان داده ها را همینجا وارد کرد
// و یا فقط کانتکست را ساخت و از داخل کامپوننت اینکار را انجام داد
const myApp = {
    name: {
      post: "myPost",
      author: "myAuthor"
    },
};
  
const myAppContext = React.createContext(myApp);

export default myAppContext;