import React from 'react';
import SearchHeader from './SearchHeader';
import SearchForm from './SearchForm';

export default class SearchMain extends React.Component {
  render() {
    return (
        <div className="Search-container">
            {SearchHeader}
            <SearchForm/>
        </div>
    );
  }
}