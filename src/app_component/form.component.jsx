import React from "react";
import './form.style.css';


const Form = props => {
    return (
        <div className="container">

            <form onSubmit={props.loadweather}>
                <div className="row">
                    <div className="col md-3">
                        <input type ="text" className="form-control" name="city" autoComplete="off"

                               placeholder="City"/>

                    </div>


                    <button className="btn btn-warning">Get Weather</button>

                </div>
            </form>

        </div>



    );
};

function error() {
    return(
        <div className="alert alert-danger mx-5">
            Please enter city and country name
        </div>
    )

}





export default Form;

