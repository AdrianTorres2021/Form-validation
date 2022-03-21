import React from 'react';
import { useState, useEffect } from "react";
const Form = props => {
    const {inputs, setInputs} = props;
    const {firstNameError} = props.inputs;
    //const firstNameError = props.inputs.firstName;
    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
    });
}; 
useEffect(() => {
    console.log(firstNameError);
})
/*
    const handleTitle = (e) => {
    setTitle(e.target.value);
    if(e.target.value.length < 1) {
        setTitleError("Title is required!");
    } else if(e.target.value.length < 3) {
        setTitleError("Title must be 3 characters or longer!");
    } else {
        setTitleError('');
    }
} */
    return(
        <form className="form-container">
            <div className="form-group">
                <label htmlFor="firstName" className="label-box">First Name</label>
                <input onChange = {onChange} type="text" name="firstName" className="input-chart"/>
            </div>
            <div className="form-group">
                <label htmlFor="lastName" className="label-box">Last Name</label>
                <input onChange={onChange} type="text" name="lastName" className="input-chart"/>
            </div>
            <div className="form-group">
                <label htmlFor="email" className="label-box">Email</label>
                <input onChange={onChange} type="text" name="email" className="input-chart"/>
            </div>
            <div className="form-group">
                <label htmlFor="password" className="label-box">Password</label>
                <input onChange={onChange} type="password" name="password" className="input-chart"/>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword" className="label-box">Confirm Password</label>
                <input onChange={onChange} type="password" name="confirmPassword" className="input-chart"/>
            </div>
        </form>
    ); 
};


export default Form