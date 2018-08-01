import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WixComponent from '../BaseComponents/WixComponent';

import styles from './EmptyState.scss';

class EmptyState extends WixComponent {
  static propTypes = {
    name: PropTypes.string
  };

  static defaultProps = {
    name: 'Mr. Meeseeks'
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {name} = this.props;

    return (
      <div className={classNames(styles.wrapper)}>
        <span data-hook="empty-state-name">
          {`I'm ${name}, look at me!`}
        </span>
      </div>
    );
  }
}

EmptyState.displayName = 'EmptyState';

export default EmptyState;
