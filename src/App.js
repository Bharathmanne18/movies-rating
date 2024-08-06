import React from 'react';
import "./App.css";
import SearchAppBar from './Appbar';
import ResponsiveDrawer from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <ResponsiveDrawer/>
    </div>
  );
}

export default App;


