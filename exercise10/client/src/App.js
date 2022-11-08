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

const [loadingData, setLoadingData] = useState(true);
const [error, setError] = useState(false);
const [emptyData, setEmptyData] = useState(false);
const [data, setData] = useState(false);

const zip = "<your chosen ZIP code>"
const country = "<your chosen country>"
const API key = "<your APIkey>"


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

useEffect(() => {
  // start the fetching
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
  )
    .then((response) => response.json())
    .then((actualData) => console.log(actualData))
    .catch((err) => {
      console.log(err.message);
    });
}, []); // no callback statement within the useEffect means that the embedded function will only run once; when the DOM was loaded!

export default App;
