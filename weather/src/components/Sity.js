import React, { useEffect, useState } from "react";
import axios from "axios";

function Sity (props) {
   
    const API_Syti =`https://api.openweathermap.org/data/2.5/weather?lat=${
        props.lat}&lon=${props.lon}&units=metric&lang=en&APPID=${props.API_KEY}`;
   

         
    if ( props.lat != 0 && props.lon !=0 ) { 
    useEffect(() => {
            axios.get(API_Syti).then( res =>{
            console.log(res.data);
            if (res.data.name) {
                props.setSity(res.data.name);
            }else{
                props.setSity('где-то на земле ;))))')
            }
        });
    },[props.lat, props.lon]);
    }
    
    console.log(props.sity);

}

export default Sity;