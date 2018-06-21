import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieItemList from './MovieItemList';
import { fetchMovies } from '../actions/searchActions';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.baseServiceUrl = 'http://react-cdp-api.herokuapp.com';
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // Typical usage (don't forget to compare props)
    if (this.props.searchBy != nextProps.searchBy || this.props.searchText != nextProps.searchText) {
      this.props.dispatch(fetchMovies(this.baseServiceUrl, nextProps.searchBy, nextProps.searchText));
    }
  }

  componentDidMount() {
    if (this.props.searchBy && this.props.searchText) {
      this.props.dispatch(fetchMovies(this.baseServiceUrl, this.props.searchBy, this.props.searchText));
    }
  }

  render() {

    if (this.props.moviesList == undefined) {
      return (
            <div className="Search-container Search-result">
                Start searching ...
            </div>
      );
    } else if (this.props.moviesList.length == 0) {
      return (
            <div className="Search-container Search-result">
                No films found
            </div>
      );
    }

    return (
            <div className="Search-container">
                <div id="searchResultList" className="Search-result SearchResult-column">
                    {this.props.moviesList.map(item => 
                        <MovieItemList key={item.id} id={item.id} title={item.title} img={item.poster_path} 
                        genre={item.genres} rating={item.vote_count} moviesList={this.props.moviesList} />)}
                </div>
            </div>
    );
  }
}

SearchResult.propTypes = {
  searchBy: PropTypes.string,
  searchText: PropTypes.string,
  dispatch: PropTypes.func,
  moviesList: PropTypes.func,
  
};

function mapStateToProps(state) {
  return {
    moviesList: state.searchReducer.movies,
    loading: state.searchReducer.loading,
    error: state.searchReducer.error,
  };
}

export default connect(mapStateToProps)(SearchResult);
