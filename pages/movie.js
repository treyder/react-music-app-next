import React from 'react';
import { Provider } from 'react-redux';
import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import store from '../store';
import Layout from '../components/MyLayout';
import Film from '../components/Film';

class movie extends React.Component {
  render() {

    return (
            <Provider store={store}>
                <Layout>
                    <Film loaded={this.props.loaded} selectedMovie={this.props.selectedMovie}/>
                </Layout>
            </Provider>
    );
  }
}

movie.propTypes = {
    loaded: PropTypes.bool,
    selectedMovie: PropTypes.object
};

movie.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`);
  const data = await res.json();

  return {
    loaded: true,
    selectedMovie: data,
  };
};

export default withRouter(movie);
