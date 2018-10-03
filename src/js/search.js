import React from 'react';

class Search extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const searchText = document.getElementById("searchT").value;
        const updatedText = searchText.replace(/ /g, '+');  //to replace all spaces with + in the search value so it works in the api call
        this.props.onClick(updatedText);   
    }
    render() {
        return (
            <div className='Search'>
                <h1 id="title"><span className="far fa-images"></span>GIFS</h1>
                <input id="searchT" />
                <button id="searchB" className="fa fa-search" onClick={this.handleClick} />
            </div>
        ); 
    }
}
export default Search;