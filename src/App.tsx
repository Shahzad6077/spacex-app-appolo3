import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { HomeView, SpacexLaunchesView } from './Views';
import { Header } from "./Components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="spacex/*" element={<SpacexLaunchesView />} />
      </Routes>
    </div>
  );
}

export default App;
