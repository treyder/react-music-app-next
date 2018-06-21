import React from 'react';
import { Provider } from 'react-redux';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import store from '../store';
import Layout from '../components/MyLayout';
import SearchMain from '../components/SearchMain';
import SearchResult from '../components/SearchResult';

class search extends React.Component {
  render() {
    const { router } = this.props;

    return (
            <Provider store={store}>
                <Layout>
                    <SearchMain />
                    <SearchResult searchBy={router.query.searchBy} searchText={router.query.searchText}/>
                </Layout>
            </Provider>
    );
  }
}

search.propTypes = {
    router: PropTypes.object
};

export default withRouter(search);
