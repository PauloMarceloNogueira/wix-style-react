import React from 'react';
import PropTypes from 'prop-types';
import style from './ImageViewer.scss';
import Tooltip from '../Tooltip';
import Button from '../Button';
import Delete from 'wix-ui-icons-common/Delete';
import Replace from 'wix-ui-icons-common/Replace';
import WixComponent from '../BaseComponents/WixComponent';
import FormFieldError from 'wix-ui-icons-common/system/FormFieldError';
import classNames from 'classnames';
import AddItem from '../AddItem/AddItem';

const TOOLTIP_COMMON_PROPS = {
  showDelay: 0,
  hideDelay: 0,
  align: 'center',
  placement: 'top',
  theme: 'dark'
};

class ImageViewer extends WixComponent {
  render() {
    const {
      imageUrl,
      onAddImage,
      onUpdateImage,
      onRemoveImage,
      width,
      height,
      error,
      errorMessage,
      tooltipPlacement,
      tooltipAddProps,
      tooltipUpdateProps,
      tooltipRemoveProps,
      tooltipErrorProps
    } = this.props;
    const classes = classNames(style.container, {[style.hasLogo]: imageUrl, [style.hasError]: error});

    return (
      <div className={classes} style={{width, height}} data-hook="image-container">
        {!imageUrl &&
        <AddItem data-hook="add-image" height={height} onClick={onAddImage} tooltipProps={tooltipAddProps}/>
        }
        {!!imageUrl &&
        <div className={style.changeLogoContainer}>
          <div className={style.imageLayout}>
            <img data-hook="image-viewer-image" className={style.image} src={imageUrl}/>
          </div>
          <div className={style.imageBackground}>
            <div className={style.buttons}>
              <Tooltip dataHook="update-image" {...TOOLTIP_COMMON_PROPS} {...tooltipUpdateProps}>
                <Button onClick={onUpdateImage} theme="icon-whitesecondary">
                  <Replace size="1.5em"/>
                </Button >
              </Tooltip>
              <Tooltip dataHook="remove-image" {...TOOLTIP_COMMON_PROPS} {...tooltipRemoveProps}>
                <Button theme="icon-whitesecondary" onClick={onRemoveImage}>
                  <Delete size="1.5em"/>
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
        }
        {!!error &&
        <Tooltip
          dataHook="error-tooltip"
          disabled={!errorMessage}
          placement={tooltipPlacement}
          content={errorMessage}
          {...TOOLTIP_COMMON_PROPS}
          {...tooltipErrorProps}
          >
          <div className={style.exclamation}><FormFieldError/></div>
        </Tooltip>}

      </div>
    );
  }
}

ImageViewer.defaultProps = {
  tooltipAddProps: {
    content: 'Add Image'
  },
  tooltipUpdateProps: {
    content: 'Update'
  },
  tooltipRemoveProps: {
    content: 'Remove'
  }
};

ImageViewer.propTypes = {
  /** Image url, blank for not uploaded */
  imageUrl: PropTypes.string,
  /** Show error icon */
  error: PropTypes.bool,
  /** Error tooltip message */
  errorMessage: PropTypes.string,
  /** Error tooltip props */
  tooltipErrorProps: PropTypes.object,
  /** Error tooltip placement
   * @deprecated
   * @see tooltipErrorProps
   */
  tooltipPlacement: PropTypes.string,
  /** Add icon tooltip props */
  tooltipAddProps: PropTypes.object,
  /** Update icon tooltip props */
  tooltipUpdateProps: PropTypes.object,
  /** Remove icon tooltip props */
  tooltipRemoveProps: PropTypes.object,
  /** Add image click handler */
  onAddImage: PropTypes.func,
  /** Update image click handler */
  onUpdateImage: PropTypes.func,
  /** Remove image click handler */
  onRemoveImage: PropTypes.func,
  /** Element width */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Element height */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ImageViewer;
