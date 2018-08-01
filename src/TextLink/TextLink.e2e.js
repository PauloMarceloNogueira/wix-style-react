import eyes from 'eyes.it';
import {formFieldTestkitFactory, getStoryUrl, waitForVisibilityOf} from '../../testkit/protractor';

const storyUrl = getStoryUrl('5. Buttons', '5.8 Text Link');
const driver = formFieldTestkitFactory({dataHook: 'storybook-textlink'});

describe('TextLink', () => {
  beforeAll(() => browser.get(storyUrl));

  eyes.it('should render', async () => {
    await waitForVisibilityOf(driver.element(), 'Cannot find TextLink component');
    expect(await driver.getLabel().getText()).toMatch('Click to visit wix.com');
  });
});
