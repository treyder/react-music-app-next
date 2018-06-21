import React from 'react';
import PropTypes from 'prop-types';
import AppTitle from './AppTitle';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout = props => (
  <div style={layoutStyle}>
    {AppTitle}
    {props.children}
  </div>
);

Layout.propTypes = {
    children: PropTypes.array
};

export default Layout;
