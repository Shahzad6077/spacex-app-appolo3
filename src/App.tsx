import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { HomeView, SpacexLaunchesView } from "./Views";
import { Header, Launch } from "./Components";
import { Container } from "@material-ui/core";
import sv from "./Assets/logosx.svg";
function App() {
  console.log(sv, "svcc");
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="spacex" element={<SpacexLaunchesView />}>
            <Route path=":launchId" element={<Launch />} />
          </Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
