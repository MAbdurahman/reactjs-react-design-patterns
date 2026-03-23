import React, {useContext} from 'react';
import {Context} from './APIContext';


export default function BaseComponent() {
   const{number} = useContext(Context);

   return (
      <div>
         <h2>{number}</h2>
      </div>

   );
}