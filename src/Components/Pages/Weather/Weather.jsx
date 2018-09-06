import React from "react";

// class Weather extends Component{
    // render(){
        const Weather=(props) =>{
        return(
            <div className="container">
            <div className="row">
            <div className="col s3 offset-s4">
            <div className="">
                {props.country && props.city && <p>Location:{props.city}, {props.country}</p>}
                {props.temperature && <p>Temperature:{props.temperature}</p>}
                {props.humidity && <p>Humidity:{props.humidity}</p>}
                {props.description && props.iconCode &&<p>Conditions:{props.description} {props.iconCode} </p>}
                {props.error && <p>{props.error}</p>}
                </div>
                </div>
                </div>
            </div>
        );
    }


export default Weather;