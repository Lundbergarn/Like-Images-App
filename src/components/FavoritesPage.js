import React from 'react';

const Favorites = (props) => {
  return (
    <div>
        <h1 style={{textAlign: "center"}}>Favorite Images</h1>
        {props.children}
    </div>
  )
}

export default Favorites;