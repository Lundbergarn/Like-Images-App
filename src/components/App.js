import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import unsplash from '../api/unsplash';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import ImagePage from './ImagePage.js';
import Favorites from './Favorites';

class App extends React.Component {
  state = { 
    images: [],
    savedImages: []
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term, per_page: 25}
    });

    this.setState({ images: response.data.results })
  }

  saveImage = async (id, url, alt_description) => {
    let liked = false;

    const saveLike = this.state.images.map(image => {
      if(image.id === id) {
        image.liked = true;
        liked = true;
      }
      return image;
    });

    await this.setState((state, props) => ({
      images: saveLike,
      savedImages: [...state.savedImages, {id, urls:{small: url}, alt_description, liked}]
    }));
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <BrowserRouter>
          <Navbar />

          <Route path="/" exact>
            <ImagePage>
              <SearchBar onSubmit={this.onSearchSubmit} />
              <p>Found: {this.state.images.length} images</p>
              <ImageList images={this.state.images} saveImage={this.saveImage}/>
            </ImagePage>
          </Route>

          <Route path="/favorites" exact>
            <Favorites images={this.state.savedImages}></Favorites>
          </Route>

        </BrowserRouter>
      </div>
    )
  }
}

export default App;