import React from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui-next/Button';
import Link from 'next/link';
import PropTypes from 'prop-types';

import SearchOptions from './SearchOptions';

import { redirectToSearchForMovies, searchTextChange, searchByChange } from '../actions/searchActions';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    if (this.props.location) {
      const params = new URLSearchParams(this.props.location.search);
      const searchBy = params.get('searchBy');
      if (searchBy) {
        this.props.dispatch(searchByChange(searchBy));
      }
      const searchText = params.get('searchText');
      if (searchText) {
        this.props.dispatch(searchTextChange(searchText));
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(redirectToSearchForMovies(this.props.searchBy, this.props.searchText));
  }

  render() {
    const {
      error, loading
    } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
            <div>
                <input type="text" id="searchText" value={this.props.searchText} 
                onChange={event => this.props.dispatch(searchTextChange(event.target.value))} className="Search-input"/>
                <div className="Search-options-table">
                    <div className="Search-options-row">
                        <div className="Search-options-cell">
                            <SearchOptions actionOnChange={event => 
                                this.props.dispatch(searchByChange(event.searchBy))} />
                        </div>
                        <div className="Search-options-cell">
                            <Link href={`/search?searchBy=${this.props.searchBy}&searchText=${this.props.searchText}`}>
                                <Button id="submitButton" variant="raised" color="primary">SEARCH</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}

SearchForm.propTypes = {
    location: {
        search: PropTypes.string
    },
    dispatch: PropTypes.func,
    searchBy: PropTypes.string,
    searchText: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    loading: state.searchReducer.loading,
    error: state.searchReducer.error,
    searchText: state.searchReducer.searchText,
    searchBy: state.searchReducer.searchBy,
    redirect: state.searchReducer.redirect,
  };
}

export default connect(mapStateToProps)(SearchForm);
