import React from 'react';
import EmptyState from 'wix-style-react/EmptyState';
import TextLink from 'wix-style-react/TextLink';

const EmptyStateExample = () => (
  <EmptyState
    title="You don't have any items yet"
    subtitle="Create your product item in an easy & fast way to display it on your site"
    image={(
      <div
        style={{
          height: 120,
          width: 120,
          backgroundColor: '#dfe5eb',
          borderRadius: '50%'
        }}
        />
    )}
    >
    <TextLink>New Item</TextLink>
  </EmptyState>
);

export default EmptyStateExample;
