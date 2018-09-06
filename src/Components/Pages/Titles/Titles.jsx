import React, {Component} from "react";
import "../App/App.css";

class Titles extends Component {
    render(){
        return(
            <div className="container teal lighten-5">
            <div className=' row s3'>
            <div className=" col s5 offset-s3">
            <div className="">
                <h1>Weather App</h1>
                <p>Helps You Find Weather Condition In Cities...</p>
            </div>
            </div>
         </div>
         </div>
        );
    }
}


export default Titles;