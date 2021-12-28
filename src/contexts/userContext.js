import React from 'react';

export const user = {
    first_name: 'john',
    last_name: 'doe',
    number: 12345
};
  
const userContext = React.createContext(user);

export default userContext;