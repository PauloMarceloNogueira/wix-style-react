import React from 'react';
import PropTypes from 'prop-types';
import style from './AddItem.scss';
import Tooltip from '../Tooltip';
import AddMedia from 'wix-ui-icons-common/system/AddMedia';
import WixComponent from '../BaseComponents/WixComponent';
import classNames from 'classnames';

const TOOLTIP_COMMON_PROPS = {
  showDelay: 0,
  theme: 'dark',
  hideDelay: 0,
  align: 'center',
  placement: 'top'
};

const RATIO_CLASSES = {
  '16/9': style.ratio16x9,
  '3/4': style.ratio3x4,
  '4/3': style.ratio4x3,
  '1/1': style.ratio1x1
};

const renderInnerAddItem = () => (
  <div className={style.dashedBorder} >
    <AddMedia className={style.plusIcon} size="31px"/>
  </div>
);

class AddItem extends WixComponent {
  render() {
    const {
      onClick,
      height,
      tooltipContent,
      tooltipProps,
      aspectRatio
    } = this.props;
    const ratio = !height && RATIO_CLASSES[aspectRatio];
    return (
      <div className={classNames(ratio, style.box)} style={{height}} >
        <div className={style.container} onClick={onClick} data-hook="add-container">
          {
            tooltipProps || tooltipContent ?
              <Tooltip dataHook="add-tooltip" content={tooltipContent} {...TOOLTIP_COMMON_PROPS} {...tooltipProps}>
                {renderInnerAddItem()}
              </Tooltip> :
              renderInnerAddItem()
          }
        </div>
      </div>
    );
  }
}

AddItem.propTypes = {
  /** Function called upon click */
  onClick: PropTypes.func,
  /** The element's aspect ratio */
  aspectRatio: PropTypes.oneOf(Object.keys(RATIO_CLASSES)),
  /** Element's height - overrides the asspect ratio */
  height: PropTypes.number,
  /** Tooltip props, leave undefined for no tooltip */
  tooltipProps: PropTypes.shape(Tooltip.propTypes),
  /** Content of the tooltip
   * @deprecated
   * @see tooltipProps
   */
  tooltipContent: PropTypes.string
};

AddItem.defaultProps = {
  aspectRatio: '1/1'
};

export default AddItem;
