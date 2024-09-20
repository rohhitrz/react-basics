// import DebouncedInput from "./components/Debouncing";
// import DebouncedInput from "./components/LodashDebouncing";
import UseLayout from "./components/useLayoutEffect";
import "./App.css"
import { ThemeProvider,useTheme } from "./components/usecontexthook";


const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {/* <DebouncedInput/> */}
      {/* <UseLayout/> */}
      <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>

      
    </div>
  );
}

export default App;
