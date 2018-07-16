import React from 'react';
import styles from './styles.scss';
import WixComponent from '../BaseComponents/WixComponent';
import PropTypes from 'prop-types';

export default class Cell extends WixComponent {

  static propTypes = {
    children: PropTypes.node,
    span: PropTypes.number,
    dataHook: PropTypes.string
  };

  render() {
    const inlineStyle = {
      gridColumn: `span ${this.props.span}`
    };

    return (
      <div
        style={inlineStyle}
        className={styles.cell}
        data-hook={this.props.dataHook}
        >
        {this.props.children}
      </div>
    );
  }
}
