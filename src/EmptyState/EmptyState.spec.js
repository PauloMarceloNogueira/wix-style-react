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

  const defaultProps = {
    title: 'My awesome title',
    subtitle: 'My awesome subtitle'
  };

  it('should have a title and a subtitle', () => {
    const driver = createDriver(
      <EmptyState
        {...defaultProps}
        />
    );

    expect(driver.getTitleText()).toEqual('My awesome title');
    expect(driver.getSubtitleText()).toEqual('My awesome subtitle');
  });

  it('should support title and subtitle passed as nodes', () => {
    const driver = createDriver(
      <EmptyState
        title={<span>I am a node title</span>}
        subtitle={<span>I am a node subtitle</span>}
        />
    );

    expect(driver.getTitleText()).toContain('I am a node title');
    expect(driver.getSubtitleText()).toContain('I am a node subtitle');
  });

  it('should have an image', () => {
    const driver = createDriver(
      <EmptyState
        {...defaultProps}
        image="http://wix.com/some-image.png"
        />
    );

    expect(driver.getImageUrl()).toEqual('http://wix.com/some-image.png');
  });

  it('should support image passed as a node', () => {
    const driver = createDriver(
      <EmptyState
        {...defaultProps}
        image={<span>I am the image node</span>}
        />
    );

    expect(driver.getImageUrl()).toEqual('');
    expect(driver.getImageContainerContent()).toContain('I am the image node');
  });

  it('should render it\'s children', () => {
    const driver = createDriver(
      <EmptyState
        {...defaultProps}
        >
        <button>I am a button!</button>
      </EmptyState>
    );

    expect(driver.getChildrenContent()).toEqual('<button>I am a button!</button>');
  });

  describe('testkit', () => {
    it('should exist', () => {
      expect(isTestkitExists(
        <EmptyState {...defaultProps}/>,
        emptyStateTestkitFactory
      )).toBe(true);
    });
  });

  describe('enzyme testkit', () => {
    it('should exist', () => {
      expect(isEnzymeTestkitExists(
        <EmptyState {...defaultProps}/>,
        enzymeEmptyStateTestkitFactory,
        mount
      )).toBe(true);
    });
  });
});
