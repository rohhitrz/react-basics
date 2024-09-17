import React, {useState,useCallback }from "react";
import _ from 'lodash'
const DebouncedInput=()=>{

    const [searchTerm,setSearchTerm]=useState('');

    const debounceSearch= useCallback(
        _.debounce((query)=>{
            console.log("making API call with:", query);


        },5000),
        []


    );


    const handleChange=(e)=>{
        setSearchTerm(e.target.value);
        debounceSearch(e.target.value);
    }

    return (
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
          />
          <p>Searching for: {searchTerm}</p>
        </div>
      );
    };
    
    export default DebouncedInput;