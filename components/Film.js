import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

class Film extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: props.loaded, selectedMovie: props.selectedMovie };
  }

  render() {
    if (this.state.loaded) {
      return (
                <div className="Film">
                    <p align="right"><Link href="/"><a>Search</a></Link></p>
                    <p><img src={this.state.selectedMovie.poster_path} /></p>
                    <p>{this.state.selectedMovie.title}</p>
                    <p>{this.state.selectedMovie.tagline}</p>
                    <p>{this.state.selectedMovie.release_date} {this.state.selectedMovie.runtime} min</p>
                    <p></p>
                    <p>{this.state.selectedMovie.overview}</p>
                </div>
      );
    }
    return (
                <div className="Film">
                    Loading ...
                </div>
    );
  }
}

Film.propTypes = {
    loaded: PropTypes.bool,
    selectedMovie: PropTypes.object
};

export default Film;
