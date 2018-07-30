import * as React from 'react';
import {storiesOf} from '@storybook/react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import Markdown from 'wix-storybook-utils/Markdown';

import Readme from '../../src/Layout/README.md';

import ListOfCards from './examples/ListOfCards';
import ListOfCardsRaw from '!raw-loader!./examples/ListOfCards';

import MainAndSide from './examples/MainAndSide';
import MainAndSideRaw from '!raw-loader!./examples/MainAndSide';

import Form from './examples/Form';
import FormRaw from '!raw-loader!./examples/Form';

import HolyGrail from './examples/HolyGrail';
import HolyGrailRaw from '!raw-loader!./examples/HolyGrail';

storiesOf('Components/Layout', module)
  .add('Readme', () => (
    <Markdown source={Readme}/>
  ));

storiesOf('Components/Layout/Examples', module)
  .add('Holy Grail Layout', () => (
    <CodeExample title="Holy Grail Layout" code={HolyGrailRaw}>
      <HolyGrail/>
    </CodeExample>
  ))

  .add('List of Cards', () => (
    <CodeExample title="List of Cards" code={ListOfCardsRaw}>
      <ListOfCards/>
    </CodeExample>
  ))

  .add('Main and Side', () => (
    <CodeExample title="Main and Side" code={MainAndSideRaw}>
      <MainAndSide/>
    </CodeExample>
  ))

  .add(' Form', () => (
    <CodeExample title=" Form" code={FormRaw}>
      <Form/>
    </CodeExample>
  ));
