import React from "react";
import "./custom-button.styles.scss";

const CustomButton = (props) => (
    <button 
      className={`custom-button ${props.isgooglesignin ? 'google-sign-in' : ''} `}
      {...props}
    >
        {props.children}
    </button>
)

export default CustomButton;