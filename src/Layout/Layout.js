import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Layout = ({children, gap}) =>
  <div
    style={{
      gridGap: gap
    }}
    className={styles.layout}
    children={children}
    />;

Layout.propTypes = {
  children: PropTypes.node,
  gap: PropTypes.string
};

Layout.defaultProps = {
  gap: '30px'
};

export default Layout;
