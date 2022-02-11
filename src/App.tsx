import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List/List";
import { useAppSelector } from "./redux/hooks";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const primaryColor = useAppSelector((state) => state.theme.primaryColor);

  const style = {
    default: {
      backgroundColor: primaryColor,
    },
  };

  return (
    <div className="App" style={style.default}>
      <div className="App-header">
        <List />
      </div>
    </div>
  );
}

export default App;
