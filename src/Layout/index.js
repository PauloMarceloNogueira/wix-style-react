import React from 'react';
import styles from './styles.scss';
import WixComponent from '../BaseComponents/WixComponent';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Layout extends WixComponent {
  static propTypes = {
    children: PropTypes.node,
    gap: PropTypes.string
  };

  render() {
    const classes = classNames(styles.container);
    const inlineStyle = {};

    if (this.props.gap) {
      inlineStyle.gridGap = this.props.gap;
    }

    return (
      <div style={inlineStyle} className={classes}>
        {this.props.children}
      </div>
    );
  }
}

class Cell extends WixComponent {

  static propTypes = {
    children: PropTypes.node,
    span: PropTypes.number,
    dataHook: PropTypes.string
  };

  render() {
    const inlineStyle = {
      gridColumn: `span ${this.props.span}`
    };

    const columnClasses = classNames(
      styles.item
    );

    return (
      <div style={inlineStyle} className={columnClasses} data-hook={this.props.dataHook}>
        {this.props.children}
      </div>
    );
  }
}

export {Layout, Cell};
