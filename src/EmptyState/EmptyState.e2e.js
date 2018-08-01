import eyes from 'eyes.it';

import {emptyStateTestkitFactory} from '../../testkit/protractor';
import {createStoryUrl, waitForVisibilityOf, scrollToElement} from '../../test/utils/protractor';
import {storySettings} from '../../stories/EmptyState/storySettings';

// eslint-disable-next-line
fdescribe('EmptyState', () => {

  const storyUrl = createStoryUrl({kind: storySettings.kind, story: storySettings.storyName, withExamples: true});

  const createDriverFactory = async (dataHook = 'storybook-empty-state') => {
    await browser.get(storyUrl);

    const driver = emptyStateTestkitFactory({dataHook});
    await waitForVisibilityOf(driver.element(), 'Cannot find EmptyState component');
    await scrollToElement(driver.element());
    return driver;
  };

  eyes.it('should render', async () => {
    const driver = await createDriverFactory();

    expect(driver.element()).toBeTruthy();
  });
});
