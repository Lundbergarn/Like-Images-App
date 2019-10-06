import React from 'react';

const Loader = () => {
  return ( 
    <div className="ui" style={{position: "relative", top: "35vh"}}>
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading</div>
      </div>
    </div>
  );
};

export default Loader;