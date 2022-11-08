// CSS and other resources

import "./App.css";

// External Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import LandingView from "./LandingView";
import ExampleDataView from "./SecondDataView";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route index element={<LandingView />} /> 
          <Route path="exampledataview" element={<ExampleDataView />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
