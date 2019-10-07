import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';
import ImageModal from './ImageModal';



class ImageList extends React.Component {
  state = {
    modalOpen: false,
    image: null
  };

  openModal = (e) => {
    this.setState({
      modalOpen: true,
      image: e.target.currentSrc
    })
  }

  closeModal = () => {
    this.setState({
      modalOpen: false
    })
  }


  render() {
    return (
      <div className="image-list">
          {this.state.modalOpen ? <ImageModal closeModal={this.closeModal} image={this.state.image}/> : null}
          {this.props.images.map((image) => 
            {
              return (
                <ImageCard
                  key={image.id}
                  image={image}
                  saveImage={this.props.saveImage}
                  removeImage={this.props.removeImage}
                  openModal={this.openModal}
                />
              )
            }
          )}
      </div>
    )
  }
};

export default ImageList;
