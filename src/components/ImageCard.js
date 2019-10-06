import React from 'react';
import './ImageCard.css';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  }

  likePicture = (e, url, alt, id, liked) => {
    this.props.saveImage(id, url, alt, liked);
    e.target.classList.remove("outline");
  }

  render() {
    const { alt_description, urls, id, liked = false } = this.props.image;

    return ( 
      <div ket={id} className="card-container" style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img 
          ref={this.imageRef}
          alt={alt_description}
          src={urls.small}
          onClick={(e) => this.likePicture(e, urls.small, alt_description, id)}
        />
        <i
          className={!liked ? "outline heart icon" : "heart icon"}
        ></i>
      </div>
    )
  }
}

export default ImageCard;