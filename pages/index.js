import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Layout from '../components/MyLayout';
import SearchMain from '../components/SearchMain';
import SearchResult from '../components/SearchResult';

const Index = () => (
    <Provider store={store}>
        <Layout>
            <SearchMain />
            <SearchResult/>
        </Layout>
    </Provider>
);

export default Index;