// // import DebouncedInput from "./components/Debouncing";
// // import DebouncedInput from "./components/LodashDebouncing";
// import UseLayout from "./components/useLayoutEffect";
// import "./App.css"
// import { ThemeProvider,useTheme } from "./components/usecontexthook";


// const ThemeSwitcher = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
//       <h1>Current Theme: {theme}</h1>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       {/* <DebouncedInput/> */}
//       {/* <UseLayout/> */}
//       <ThemeProvider>
//       <ThemeSwitcher />
//     </ThemeProvider>

      
//     </div>
//   );
// }

// export default App;


import React,{ useState } from "react";
import NavBar from "./useContextUsingContextapi/NavBar";
import { useContext } from "react";
import { counterContext } from "./useContextUsingContextapi/context";

import CounterComponent from "./customHooks/customHookComponent";



function App(){

  //to create a counter

//   const[count,setCount]=useState(0);

//   const increment=()=>{
//     setCount(count+1);
//   }

//   const decrement=()=>{
//     setCount(count-1);
// }

// return(
//   <>
//   <counterContext.Provider value={count}> 
//   <NavBar/>
//   {/* <NavBar count={count}/> */}
//    <div style={{display:"flex", flexDirection:"column", width:"20rem"}}>
//     <h1>Counter App</h1>
//     <h2>count:{count}</h2>
//     <button onClick={increment}>Increase</button>
//     <button onClick={decrement}>Decrease</button>



//    </div>
//    </counterContext.Provider>
//    </>

//   )

return(
  <div>
    <h1>My custom counter App</h1>
    <CounterComponent/>

  
  </div>






)



}


export default App;
