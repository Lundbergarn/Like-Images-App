import React from 'react';

const Loader = () => {
  return ( 
    <div class="ui" style={{position: "relative", top: "35vh"}}>
      <div class="ui active inverted dimmer">
        <div class="ui text loader">Loading</div>
      </div>
    </div>
  );
};

export default Loader;