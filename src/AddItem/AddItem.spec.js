import React from 'react';
import {createDriverFactory, resolveIn} from '../test-common';
import {addItemTestkitFactory} from '../../testkit';
import {addItemTestkitFactory as enzymeAddItemTestkitFactory} from '../../testkit/enzyme';
import AddItem from './AddItem';
import addItemDriverFactory from './AddItem.driver';
import {isTestkitExists, isEnzymeTestkitExists} from '../../testkit/test-common';
import {mount} from 'enzyme';

describe('AddItem', () => {

  const TOOLTIP_CONTENT = 'BLA BLA';
  const createDriver = createDriverFactory(addItemDriverFactory);
  let props, driver;
  let addItem;


  beforeEach(() => {
    document.body.innerHTML = '';
  });

  describe('when default scenario', () => {
    beforeEach(() => {
      props = {
        onAddItem: addItem,
        tooltipContent: TOOLTIP_CONTENT
      };
      addItem = jest.fn();
    });

    it('should trigger add item', () => {
      props = {
        onAddItem: addItem,
        tooltipContent: TOOLTIP_CONTENT
      };
      driver = createDriver(<AddItem {...props}/>);
      driver.click();
      expect(addItem).toBeCalled();
    });

  });

  describe('height and width', () => {

    it('should be use asspect ratio from props', () => {
      props = {
        tooltipContent: TOOLTIP_CONTENT,
        aspectRatio: '16/9'
      };
      driver = createDriver(<AddItem {...props}/>);
      console.log('classes:', driver.getContainerStyles());
      expect(driver.getContainerClasses()).toContain('ratio16x9');
    });

    it('should have default asspect ratio 1x1', () => {
      props = {
        tooltipContent: TOOLTIP_CONTENT
      };
      driver = createDriver(<AddItem {...props}/>);
      expect(driver.getContainerClasses()).toContain('ratio1x1');
    });

    it('should be ignore asspect ratio from props when height is given', () => {
      props = {
        tooltipContent: TOOLTIP_CONTENT,
        aspectRatio: '16/9',
        height: 300
      };
      driver = createDriver(<AddItem {...props}/>);
      expect(driver.getContainerStyles()).toEqual('height: 300px;');
    });

  });

  describe('hide or show add item', () => {

    it('should have an Add item tooltip', () => {
      props = {
        tooltipContent: TOOLTIP_CONTENT,
        height: 300
      };
      driver = createDriver(<AddItem {...props}/>);
      const TooltipDriver = driver.getTooltipDriver();
      TooltipDriver.mouseEnter();
      return resolveIn(50)
        .then(() => {
          expect(TooltipDriver.isShown()).toBeTruthy();
          expect(TooltipDriver.getContent()).toEqual(props.tooltipContent);
        });
    });

    it('should not have an Add item tooltip', () => {
      props = { };
      driver = createDriver(<AddItem {...props}/>);
      const TooltipDriver = driver.getTooltipDriver();
      TooltipDriver.mouseEnter();
      return resolveIn(50)
        .then(() => {
          expect(TooltipDriver.isShown()).toBeFalsy();
        });
    });

  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(<AddItem/>, addItemTestkitFactory)).toBeTruthy();
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(<AddItem/>, enzymeAddItemTestkitFactory, mount)).toBeTruthy();
    });
  });

});