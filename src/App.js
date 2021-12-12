import React from "react";
import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import RecomendedVedio from "./components/RecomendedVedio";
import First from "./components/Firsst";
import Second from "./components/Second";
// import SearchPage from "./components/SearchPage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    //BEm naming convention
    <div className="app">
      <Router>
        <Header />
        {/* <Sidebar />
        <RecomendedVedio /> */}

        <Routes>
          <Route className="app-page"  path="/youtube_clone" element={<First />} />
          <Route
            className="app-page"
            path="/search/:searchTerm"
            element={<Second />}
          />
          {/* <Header/> */}
          {/* <Route   path="/" element={<Header/>}/> */}

          {/* <Route className="app-page" path="/" element={<Sidebar />} />
          <Route
            className="app-page"
            path="/recomendedvedio"
            element={<RecomendedVedio />}
          /> */}
        </Routes>
      </Router>

      {/* <h1>Hello Clever programmer , lets build youtube clone</h1> */}
      {/* <Header/>
    <div className="app-page">
    <Sidebar/>
    <RecomendedVedio/>
    </div>  */}

      {/* {header} */}
      {/* {sidebar} */}
      {/* {Recomended vedios} */}
    </div>
  );
}

export default App;
