import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { loadState, saveState } from '../localStorage';
import Layout from '../components/MyLayout.js';
import SearchMain from '../components/SearchMain';
import SearchResult from '../components/SearchResult';

export default () => (
    <Provider store={store}>
        <Layout>
            <SearchMain />
            <SearchResult/>
        </Layout>
    </Provider>
)