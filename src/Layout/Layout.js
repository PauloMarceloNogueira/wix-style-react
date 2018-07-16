import React from 'react';
import styles from './styles.scss';
import WixComponent from '../BaseComponents/WixComponent';
import PropTypes from 'prop-types';

export default class Layout extends WixComponent {
  static propTypes = {
    children: PropTypes.node,
    gap: PropTypes.string
  };

  render() {
    const inlineStyle = {};

    if (this.props.gap) {
      inlineStyle.gridGap = this.props.gap;
    }

    return (
      <div style={inlineStyle} className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}
