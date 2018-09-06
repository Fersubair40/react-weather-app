import React, {Component} from "react";
class Form extends Component{
    render(){
        return(
            <form onSubmit={this.props.loadweather}>
            <div className="container white darken-4">
            <div className=' row'>
            <div className=" col s3 offset-s4">            
            <input type="text" name="city" placeholder="city..."  />
            <input type="text" name="country" placeholder="country..." />  
            <button  className=" offset-s2 waves-effect waves-green btn-small">Get Weather</button> 
             </div>
            </div>
            </div>
            </form>
        );
    }
}


export default Form;