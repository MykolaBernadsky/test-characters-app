import React from 'react';
import SingleCharacter from "../../components/SingleCharacter";
import LayoutInner from "../../components/LayoutInner";

const Character = () => {
  return (
   <LayoutInner goHomeLink={true}>
     <SingleCharacter />
   </LayoutInner>
  );
};

export default Character;