import React from 'react';

const Results = props => {
    const { firstName, lastName, email, password, confirmPassword, firstNameError } = props.data;
    return (
        <div className="results-box">
            <h2>Your Form Data</h2>
            <div className="output-box">
                <p id="id-name">First Name:</p>
                <p id="id-name-2">{firstName}</p>
            </div>
            <div className="output-box">
                <p id="id-name">Last Name:</p>
                <p id="id-name-2">{lastName}</p>
            </div>
            <div className="output-box">
                <p id="id-name">Email:</p>
                <p id="id-name-2">{email}</p>
            </div>
            <div className="output-box">
                <p id="id-name">Password:</p>
                <p id="id-name-2">{password}</p>
            </div>
            <div className="output-box">
                <p id="id-name">Confirm Password:</p>
                <p id="id-name-2">{confirmPassword}</p>
            </div>
            <div>{firstNameError}</div>
            {/* 
            <p>First Name: <span className="span-box">{firstName}</span></p>
            <p>Last Name: <span className="span-box">{lastName}</span></p>
            <p>Email: <span className="span-box">{email}</span></p>
            <p>Password: <span className="span-box">{password}</span> </p>
            <p>Confirm Password: <span className="span-box">{confirmPassword}</span></p>*/}
        </div>
    )
}
export default Results;