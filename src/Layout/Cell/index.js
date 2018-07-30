import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';

import styles from './styles.scss';

const Cell = ({span, children, vertical}) =>
  <div
    style={{
      gridColumn: `span ${span}`
    }}
    className={classname(styles.root, {[styles.vertical]: vertical})}
    children={children}
    />;

Cell.propTypes = {
  children: PropTypes.node,
  span: PropTypes.number,
  vertical: PropTypes.bool
};

Cell.defaultProps = {
  span: 12
};

export default Cell;
