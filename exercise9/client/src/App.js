// CSS and other resources

import "./App.css";

// External Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./Header";
import Sidebar from "./Sidebar";
import LandingView from "./LandingView";
import ExampleDataView from "./ExampleDataView";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> is a <Router> that uses the HTML5 history API 
      to keep your UI in sync with the URL. */}
      <BrowserRouter>
        <Header />
        <div className="sidebarMain">
          <Sidebar />
          <Routes>
            {/* named a default path with index and another path with an actual path name (exampledataview). */}
            
             {/* index route:what will show by default.
             Any component with the index route will appear in the outlet section of our layout.  */}
            <Route index element={<LandingView />} />

             {/* It holds two props which are the path and element props. 
             The path props hold the path we would use to access the specified element. 
             The element can be a markup or a component. */}
            <Route path="exampledataview" element={<ExampleDataView />}/>
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


