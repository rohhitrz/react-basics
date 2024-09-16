import React, {useState,useEffect} from "react";

const DebouncedInput=()=>{
const [searchTerm,setSearchTerm]=useState('');
const [debouncedTerm,setDebouncedTerm]=useState('');

   useEffect(()=>{

    const timer=setTimeout(()=>{
        setDebouncedTerm(searchTerm);



    },500)

    return ()=>{
        clearTimeout(timer);
    }



   },[searchTerm]);


   const handleChange=(e)=>{
    setSearchTerm(e.target.value);

   }

   useEffect(()=>{
    if(debouncedTerm){
        console.log("Api call in :", debouncedTerm);
    }
   },[debouncedTerm]);

   return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
      />
      <p>Searching for: {debouncedTerm}</p>
    </div>
  );
};

export default DebouncedInput;




