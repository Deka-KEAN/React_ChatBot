import React from "react";

const Redirect = (props) =>{
    return (
        <div>
            <a href={props.url} target="_blank">{props.message}</a>
        </div>
    );
    
}

export default Redirect;