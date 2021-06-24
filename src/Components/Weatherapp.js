import React, { useState,useEffect} from 'react';
import "./CSS/style.css";

// https://api.openweathermap.org/data/2.5/weather?q=London&appid=7ae4454ffd44ce100a4c70d9904d0ce8

const Weatherapp = ()=>{
   
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("Bhopal");

    useEffect (()=>{
        const fetchapi = async ()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7ae4454ffd44ce100a4c70d9904d0ce8`
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);
            setcity(resJson.main)
        } 

        fetchapi();
    },[search])

    // const setdef = ()=>{
    //      def = search;
    // }
    
    return (
        <>
           <div className = "box">
                <div className="inputData">
                   <input 
                   type="search" 
                   className="inputField"
                       onChange={(event)=>{
                           setsearch(event.target.value);
                       }}
                       value={search}
                       placeholder="Search.."
                   />
                   
                </div>
                {/* <button  type="button">Set Default</button> */}
                
           
           {!city ? (
               <p className="errormsg">No data found</p>
           ) :(
               <div>
            <div className="info">
               <h2 className="location">
               <i className="fas fa-street-view"></i>
               {search}</h2>
               <h1 className="temp">
                   {city.temp}°Cel
               </h1>
               <h3 className="tempmin_max">
                     Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
               </h3>
           </div>
           <div className="wave-one"></div>
           <div className="wave-two"></div>
           <div className="wave-three"></div>
           </div>
           )}

           </div>
        </>
    )
}

export default Weatherapp;