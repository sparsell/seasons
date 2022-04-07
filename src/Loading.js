import React from 'react';

const Loading = props => {

    return (
    <div>
       <div className="ui active dimmer">
           <div className="ui big text loader"> {props.message}</div>
        </div>
    </div>    
          
    );
};

Loading.defaultProps = {
    message: "Looking for you..."
};

export default Loading;