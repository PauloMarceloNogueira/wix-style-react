import * as React from 'react';
import {storiesOf} from '@storybook/react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';
import Readme from '../../src/Layout/README.md';

import RestaurantsMenus from './samples/RestaurantsMenus';
import RestaurantsMenusRaw from '!raw-loader!./samples/RestaurantsMenus';

import RestaurantsLunch from './samples/RestaurantsLunch';
import RestaurantsLunchRaw from '!raw-loader!./samples/RestaurantsLunch';

import RestaurantsStarters from './samples/RestaurantsStarters';
import RestaurantsStartersRaw from '!raw-loader!./samples/RestaurantsStarters';

import StoresProductInfo from './samples/StoresProductInfo';
import StoresProductInfoRaw from '!raw-loader!./samples/StoresProductInfo';

storiesOf('2. Layout/New Layout', module)
  .add('Readme', () => (
    <Markdown source={Readme}/>
 ));

storiesOf('2. Layout/New Layout/Examples', module)
  .add('Restaurants/Menus', () => (
    <CodeExample title="Restaurants - Menus" code={RestaurantsMenusRaw}>
      <RestaurantsMenus/>
    </CodeExample>
 ))
  .add('Restaurants/Lunch', () => (
    <CodeExample title="Restaurants - Lunch" code={RestaurantsLunchRaw}>
      <RestaurantsLunch/>
    </CodeExample>
 ))
  .add('Restaurants/Starters', () => (
    <CodeExample title="Restaurants - Starters" code={RestaurantsStartersRaw}>
      <RestaurantsStarters/>
    </CodeExample>
 ))
  .add('Stores/Product Info', () => (
    <CodeExample title="Stores - Product Info" code={StoresProductInfoRaw}>
      <StoresProductInfo/>
    </CodeExample>
 ));
