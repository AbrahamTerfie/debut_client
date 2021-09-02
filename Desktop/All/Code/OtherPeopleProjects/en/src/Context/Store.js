import React, {useState, createContext} from 'react';

const initState = {
  user1: {
    id: '',
    firstName: '',
    lastName: '',
    userName: '',
    phoneNumber: '',

    // gender: '',
    // centralAdmin: '',
    // experts: '',
    // generalUsers: '',
    // role: '',
    // lastLogin: '',
    // notification: [],
  },
  loggedInUser: {
    // user: {
      // id: null,
      // firstName: '',
      // lastName: '',
      // userName: '',
      // phoneNumber: '',
      // gender: '',
      // centralAdmin: '',
      // experts: '',
      // generalUsers: '',
      // role: '',
      // lastLogin: '',
      // notification: [],
    // },
  },
 
 

};
export const Context = createContext(initState);

export default function Store({children}) {
  const [state, setState] = useState(initState);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}
