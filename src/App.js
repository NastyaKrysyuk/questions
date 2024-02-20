import logo from "./logo.svg";
import "./App.css";
import { Component } from "./components/Component";
import ToggleColorMode from "./components/ThemedComponent";

function App() {
  return (
    <div className="App">
      <ToggleColorMode />
      <Component />
    </div>
  );
}

export default App;
