import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";


function Contact(props) {
    return (
        <div className="contact">
          <span>
            {props.name + " // "}
            {props.username + " // "}
            {props.email}          
          </span>
        </div>
        );
}

Contact.propTypes = {
    props: PropTypes.string.isRequired
  };
  
export default Contact;