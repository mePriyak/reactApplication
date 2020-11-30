import React from 'react';
import './UserOutput.css';

const userOutput = ( props ) => {
    return (
        <div className="UserOutput">
            <p>Some random text {props.userName}</p>
            <p>I hope you are fine {props.userName}.</p>
        </div>
    );
};

export default userOutput;