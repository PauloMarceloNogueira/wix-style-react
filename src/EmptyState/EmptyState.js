import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WixComponent from '../BaseComponents/WixComponent';
import styles from './EmptyState.scss';

import Heading from '../Heading';
import Text from '../Text';

const themes = {
  page: 'page',
  pageNoBorder: 'page-no-border',
  section: 'section'
};

class EmptyState extends WixComponent {
  static propTypes = {
    theme: PropTypes.oneOf(Object.values(themes)),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    children: PropTypes.node
  };

  static defaultProps = {
    theme: 'page',
    image: null,
    children: null
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {
      theme,
      title,
      subtitle,
      image,
      children
    } = this.props;

    const themeClassName = Object.keys(themes).find(t => themes[t] === theme);

    const titleNode = typeof title === 'string' ? title : React.cloneElement(title);
    const subtitleNode = typeof subtitle === 'string' ? subtitle : React.cloneElement(subtitle);

    return (
      <div
        className={classNames(styles.wrapper, styles[themeClassName])}
        data-hook={this.props.dataHook}
        >
        <div className={styles.container}>
          {image && (
            <div className={styles.imageContainer} data-hook="empty-state-image-container">
              {typeof image === 'string' ? (
                <img src={image}/>
              ) : (
                React.cloneElement(image)
              )}
            </div>
          )}

          <div className={styles.titleContainer} data-hook="empty-state-title-container">
            {theme === 'section' ? (
              <Text size="medium" bold>{titleNode}</Text>
            ) : (
              <Heading appearance="H2">{titleNode}</Heading>
            )}
          </div>

          <div className={styles.subtitleContainer} data-hook="empty-state-subtitle-container">
            <Text secondary>{subtitleNode}</Text>
          </div>

          {children && (
            <div className={styles.childrenContainer} data-hook="empty-state-children-container">
              {children}
            </div>
          )}
        </div>
      </div>
    );
  }
}

EmptyState.displayName = 'EmptyState';

export default EmptyState;
