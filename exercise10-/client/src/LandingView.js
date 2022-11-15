import React, { useState,useEffect } from 'react';
// import {CSSTransition} from "react-transition-group";
import "./LandingView.css"
 
// const zip = "90210";
// const country = "US";
const APIkey = "3010b8ec1285774256a915971cc393e4";
const lat = "34.0901";
const lon = "-118.4065";

function LandingView() {

const [loadingData, setLoadingData] = useState(true);
const [error, setError] = useState(false);
const [emptyData, setEmptyData] = useState(false);
const [data, setData] = useState(false);

// const [isEnter,setIsEnter] = useState(false);

useEffect(() => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`
  )
    // handling responses
    .then((response) => response.json())
    // handling normal data state
    .then((actualData) => {
      setLoadingData(false);
      setError(false);
      setData(actualData);
      console.log(actualData);
    })
    // handling errors
    .catch((err) => {
      console.log(err.message);  
      setLoadingData(false);
      setError(true);
    });
}, []);

  return (
    <>
    {/* Hide the loading and error states when loading and error states are false. */}
    {(loadingData || error) && ( 
      <>
      loadingData: {loadingData ? "loading" : "not loading"}
      <br />
      error: {error ? "error" : "no error"}
      <br />
      </>
    )
    }
    {/* <CSSTransition in={loadingData} timeout={5000} appear={true} classNames = "myClass"  >  */}
    {!loadingData && !error &&(  
    <>
      location: {data.name}
      <br />
      location: {data.main.temp}  
      <br />
      minimum and maximum temperatures of the day: {data.main.temp_min}Celsius and {data.main.temp_max}Celsius
      <br />
      current weather description: {data.weather[0].description} 
      <br />
      wind speed :{data.wind.speed}, wind degree: {data.wind.deg}

    </> )}
    {/* </CSSTransition> */}
    </>
  );
}
export default LandingView;