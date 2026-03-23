import React, {useState, createContext, useEffect} from 'react';

   export const Context = createContext();

   export default function ContextProvider({children}) {
      const [number, setNumber] = useState(0);

      useEffect(() => {
         setNumber(number + 1);
      }, [number]);

      return (
         <Context.Provider value={{number}}>
            {children}
         </Context.Provider>
      );
   }