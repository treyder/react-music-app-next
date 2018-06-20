import { Provider } from 'react-redux';
import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import store from '../store';
import Layout from '../components/MyLayout.js';
import Film from '../components/Film';

class movie extends React.Component {

    render() {
        const {router} = this.props;
        
        return (
            <Provider store={store}>
                <Layout>
                    <Film loaded={this.props.loaded} selectedMovie={this.props.selectedMovie}/>
                </Layout>
            </Provider>
        );
  }
}

movie.getInitialProps = async function(context) {

    const { id } = context.query;
    const res = await fetch("http://react-cdp-api.herokuapp.com/movies/" + id);
    const data = await res.json();
  
    console.log('Initial state retrieved for movie id: ', id);
  
    return {
      loaded: true,
      selectedMovie: data
    };
  }
  
export default withRouter(movie);