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

  // Set spans for images
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  }

  // Like Image 
  likeImage = (e, url, alt, id, liked) => {
    if (e.target.nextSibling.className.includes('outline') || e.target.className.includes('outline')) {
      this.props.saveImage(id, url, alt, liked);
    } else {
      e.target.nextSibling.className += ' outline';
      this.props.removeImage(id);
    }
  }

  render() {
    const { alt_description, urls, id, liked = false } = this.props.image;
    return ( 
      <div key={id} className="card-container" style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img 
          ref={this.imageRef}
          alt={alt_description}
          src={urls.small}
          onClick={(e) => this.likeImage(e, urls.small, alt_description, id)}
        />
        <i className={!liked ? "outline heart icon" : "heart icon"} ></i>
      </div>
    )
  }
}

export default ImageCard;