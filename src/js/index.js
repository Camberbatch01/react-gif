import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search';
import GifLi from './GifLi';
import './index.css'
import registerServiceWorker from './registerServiceWorker';
let searchedYet = false;

class HomeBase extends React.Component {
    constructor() {
        super();
        this.state = {
            gifs: [],
            empty: true
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }
    handleSearchChange(searchTerm) {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`)  //fetched here so i can call upon a change in search
        .then(response => response.json())  
        .then(result => {
            this.setState({gifs: result.data}); //change gifs so the previous ones disapper even if there werent results
            if (result.data.length > 0) {
                this.setState({empty: false});  //to let me know if there were results so i can display a message in GifLi.js
            } else {
                this.setState({empty: true});
            }
        })
        searchedYet = true; //used because gifs had a border that would show even when there werent gifs at the start
    }                       //so used to keep the page empty until there was a search. Passed to GifLi.js
    render() {
        return (
            <div>
                <Search onClick={this.handleSearchChange} />
                <GifLi searched={searchedYet} empty={this.state.empty} gifs={this.state.gifs} />
            </div>
        );
    }
}
ReactDOM.render(<HomeBase />, document.getElementById('root'));
registerServiceWorker();
