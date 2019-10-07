import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import unsplash from '../api/unsplash';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Loader from './Loader';
import ImageList from './ImageList';
import ImagePage from './ImagePage.js';
import FavoritesPage from './FavoritesPage';

class App extends React.Component {
  state = { 
    images: [],
    savedImages: [],
    loading: false
  };

  onSearchSubmit = async term => {
    this.setState({ loading: true });
    
    const response = await unsplash.get('/search/photos', {
      params: { query: term, per_page: 30}
    });
    this.setState({ images: response.data.results, loading: false })
  }

  // Save liked image
  saveImage = (id, url, alt_description) => {
    let liked = false;

    const saveLike = this.state.images.map(image => {
      if (image.id === id) {
        image.liked = true;
        liked = true;
      }
      return image;
    });

    this.setState((state, props) => ({
      images: saveLike,
      savedImages: [...state.savedImages, {id, urls:{regular: url}, alt_description, liked}]
    }));
  }

  // Remove unlicked image
  removeImage = (id) => {
    const removeLike = this.state.images.map(image => {
      if (image.id === id) {
        image.liked = false;
      }
      return image;
    });

    let savedImages = this.state.savedImages.filter( image => image.id !== id);

    this.setState((state, props) => ({
      images: removeLike,
      savedImages: [...savedImages]
    }));
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <BrowserRouter>
          <Navbar />

          {this.state.loading ? <Loader /> : null}

          <Route path="/" exact>
            <ImagePage>
              <SearchBar onSubmit={this.onSearchSubmit} />
              {this.state.images.length === 0 ? <p>Search for images</p> : <p>Found: {this.state.images.length} images</p>}
              <ImageList
                images={this.state.images}
                saveImage={this.saveImage}
                removeImage={this.removeImage}
              />
            </ImagePage>
          </Route>

          <Route path="/favorites" exact>
            <FavoritesPage>
              <ImageList
                images={this.state.savedImages}
                saveImage={this.saveImage}
                removeImage={this.removeImage}
              />
            </FavoritesPage>
          </Route>

        </BrowserRouter>
      </div>
    )
  }
}

export default App;