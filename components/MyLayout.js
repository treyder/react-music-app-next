//import Header from './Header'
import AppTitle from './AppTitle';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    {AppTitle}
    {props.children}
  </div>
)

export default Layout