import React from 'react';

const Favorites = (props) => {
  console.dir(props.children.props.images);
  return (
    <div>
        <h1 style={{textAlign: "center"}}>Favorite Images</h1>
        {props.children.props.images.length === 0 ? <h3 style={{textAlign:"center"}}>You don't like any images yet!</h3>: null}
        {props.children}
    </div>
  )
}

export default Favorites;