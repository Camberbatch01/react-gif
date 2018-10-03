import React from 'react';
let result;

class GifLi extends React.Component {
  render() {
    if (!this.props.searched) { //if there hasnt been a search yet then leave the page blank
      result = null;
    } else if (this.props.empty) {
      result = <p id="message">There were 0 matches for your search!</p>;
    } else {
      result = (<div id="container" > 
      {this.props.gifs.map(GIF => 
    (<img className="gifs" key={GIF.id} src={GIF.images.fixed_height_small.url} />)
    )}
    </div>); //chose fixed height for src, thought it was a little tidier than fixed width
    }
    return result;
  }
}
export default GifLi;