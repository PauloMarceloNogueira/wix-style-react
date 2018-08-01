import React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import {storySettings} from './storySettings';

import EmptyState from '../../src/EmptyState/EmptyState';

import EmptyStateExample from './EmptyStateExample';
import EmptyStateExmapleRaw from '!raw-loader!./EmptyStateExample';

export default {
  category: storySettings.kind,
  storyName: storySettings.storyName,

  component: EmptyState,
  componentPath: '../../src/EmptyState/EmptyState.js',

  componentProps: {
    dataHook: storySettings.dataHook,
    name: undefined
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
