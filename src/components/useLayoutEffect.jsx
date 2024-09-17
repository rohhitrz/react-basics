import React, {useEffect,useLayoutEffect} from "react";

export default function UseLayout(){
useLayoutEffect(() => {
    console.log('This runs before the component renders on the screen.');
  }, []);

  useEffect(() => {
    console.log('This runs after the component has rendered.');
  }, []);
  
  

}
  