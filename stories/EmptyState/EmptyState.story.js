import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import {storySettings} from './storySettings';

import EmptyState from '../../src/EmptyState';
import TextLink from '../../src/TextLink';

import EmptyStateExample from './EmptyStateExample';
import EmptyStateExmapleRaw from '!raw-loader!./EmptyStateExample';

const imageNodeProp = (
  <div
    style={{
      height: 120,
      width: 120,
      backgroundColor: '#dfe5eb',
      borderRadius: '50%'
    }}
    />
);

const singleAction = (
  <TextLink>New Item</TextLink>
);

const twoActions = (
  <span>
    <span style={{margin: '0 15px'}}><TextLink>New Item</TextLink></span>
    <span style={{margin: '0 15px'}}><TextLink>Import Items</TextLink></span>
  </span>
);


export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: EmptyState,
  componentPath: '../../src/EmptyState/EmptyState.js',

  componentProps: {
    dataHook: storySettings.dataHook,
    theme: 'page',
    title: 'You don\'t have any items yet',
    subtitle: 'Create your product item in an easy & fast way to display it on your site',
    image: imageNodeProp,
    children: null
  },
  exampleProps: {
    theme: ['page', 'page-no-border', 'section'],
    image: [
      {label: 'No image', value: null},
      {label: 'Image URL', value: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/New_Mela_Ramanputhur_Holy_Family_Church.jpg'},
      {label: 'Node', value: imageNodeProp}
    ],
    children: [
      {label: 'No children', value: null},
      {label: 'Single action', value: singleAction},
      {label: 'Two actions', value: twoActions}
    ]
  },
  codeExample: true,
  examples: (
    <div>
      <CodeExample title="Page" code={EmptyStateExmapleRaw}>
        <EmptyStateExample/>
      </CodeExample>
    </div>
  )
};
