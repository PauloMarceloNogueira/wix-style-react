import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Cell = ({span, children}) =>
  <div
    style={{
      gridColumn: `span ${span}`
    }}
    className={styles.cell}
    children={children}
    />;

Cell.propTypes = {
  children: PropTypes.node,
  span: PropTypes.number
};

Cell.defaultProp = {
  span: 1
};

export default Cell;
