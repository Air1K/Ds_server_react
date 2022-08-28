import React from 'react';
import withOnBlur from "react-onblur";

const Input = (props) => {
    return (
        <input
        onChange = {(event)=> props.setValue( event.target.value )}
        className = {props.className}
        name = {props.name}
        id = {props.id}
        value = {props.value}
        type={props.type}
        placeholder = {props.placeholder}
        />
    );
};

export default withOnBlur(()=>{console.log('Triggered because this input lost focus')})(Input);