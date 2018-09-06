import React, {Component} from 'react';
import './App.css';
import Titles from "../Titles/Titles";
import Form from "../Form/Form";
import Weather from "../Weather/Weather";
import "../../../../node_modules/materialize-css/dist/js/materialize.min.js";
import "../../../../node_modules/materialize-css/dist/js/materialize.js";
import "../../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "../../../../node_modules/materialize-css/dist/css/materialize.css";
import Axios from "axios";
// import {button, card, row, col} from "react-materialize";
const Api_key ="d53cf722280643f31bb5ab7845884027";

class App extends Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        iconCode:undefined,
        loading: false,
        error: undefined
    }

    getWeather = (e) => { 
        const city = e.target.elements.city.value;
         const country =  e.target.elements.country.value;
        this.setState({
            loading: true
        })
    e.preventDefault();
        const api_call =  Axios.post(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_key}`);
        api_call.then(response => {
            
        console.log(response);
        if(city && country) {
        this.setState({
            temperature: response.data.main.temp,
            city: response.data.name,
            country: response.data.sys.country,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            iconCode: response.data.weather[0].icon,
            error:"",
            loading:false
        })
        } 
    }) 
        api_call.catch(error => {
            console.log(error)
            
            this.setState({
                error: "city not found",
                loading: false
            });
            setTimeout(() => {
              this.setState({
                  error: ""
              })  
            }, 1000);
        

        })
        this.setState({
                city: "",
                country: "",
        })
        
    }
    
         
        
        
    

    render() {
        return (
            <div>
                <Titles />
                <Form loadweather={this.getWeather}/>
                <Weather temperature={this.state.temperature} city={this.state.city} country={this.state.country} humidity={this.state.humidity}description={this.state.description} iconCode={this.state.iconCode} error={this.state.error}/>
            </div>
        );
    }
}

export default App;
