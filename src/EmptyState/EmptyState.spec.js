import React from 'react';
import EmptyState from './EmptyState';
import emptyStateDriverFactory from './EmptyState.driver';
import {createDriverFactory} from '../test-common';
import {emptyStateTestkitFactory} from '../../testkit';
import {emptyStateTestkitFactory as enzymeEmptyStateTestkitFactory} from '../../testkit/enzyme';
import {isTestkitExists, isEnzymeTestkitExists} from '../../testkit/test-common';
import {mount} from 'enzyme';

describe('EmptyState', () => {

  const createDriver = createDriverFactory(emptyStateDriverFactory);

  it('should accept a `name` prop', () => {
    const driver = createDriver(<EmptyState name="John"/>);

    expect(driver.getTextContent()).toEqual('I\'m John, look at me!');
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(
        <EmptyState/>,
        emptyStateTestkitFactory
      )).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(
        <EmptyState/>,
        enzymeEmptyStateTestkitFactory,
        mount
      )).toBe(true);
    });
  });
});
