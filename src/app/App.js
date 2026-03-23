import React from 'react';
import SplitScreenLayout from '../1-layout-components/SplitScreenLayout';
import LeftSideComponent from '../1-layout-components/LeftSideComponent';
import RightSideComponent from '../1-layout-components/RightSideComponent';


export default function App() {

   return (
      <>
         <SplitScreenLayout left={<LeftSideComponent/>} right={<RightSideComponent/>} />
      </>

   );
}