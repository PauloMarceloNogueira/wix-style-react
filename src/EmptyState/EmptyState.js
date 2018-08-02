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

    /** Theme of the EmptyState (can be one `page`, `page-no-border` and `section`) */
    theme: PropTypes.oneOf(Object.values(themes)),

    /** Content for the title of the Empty State */
    title: PropTypes.string.isRequired,

    /** Content for the subtitle of the Empty State */
    subtitle: PropTypes.string.isRequired,

    /** The Empty State image, can be either a string representing the image URL, or a node to render instead */
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /** Children to render below the subtitle, ideally an action of some type (Button or TextLink for instance) */
    children: PropTypes.node
  };

  static defaultProps = {
    theme: 'page',
    image: null,
    children: null
  };

  render() {
    const {
      theme,
      title,
      subtitle,
      image,
      children
    } = this.props;

    const themeClassName = Object.keys(themes).find(t => themes[t] === theme);

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
              <Text size="medium" bold>{title}</Text>
            ) : (
              <Heading appearance="H2">{title}</Heading>
            )}
          </div>

          <div className={styles.subtitleContainer} data-hook="empty-state-subtitle-container">
            <Text secondary>{subtitle}</Text>
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
