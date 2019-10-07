import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  // onFormSubmit: function(event) {}
  // Shorthand for this function 
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }
  
  render() {
    return(
      <div className="ui segment">
        <form
          onSubmit={this.onFormSubmit}
          className="ui form"
        >
          <div className="field" style={{display: "flex"}}>
            <label style={{marginRight: "10px"}}>Image Search</label>
            <input 
              type="text"
              value ={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <button className="ui primary button" style={{marginLeft: "10px"}}>Search</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;