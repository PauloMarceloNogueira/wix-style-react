import React from 'react';

import {Layout, Cell} from 'wix-style-react/Layout';
import Heading from 'wix-style-react/Heading';

export default () =>
  <Layout>
    <Cell span={12}>
      {text('Header')}
    </Cell>

    <Cell span={12}>
      <Layout>
        <Cell span={1}>
          {text('Left')}
        </Cell>
        <Cell span={10}>
          {text('Middle')}
        </Cell>
        <Cell span={1}>
          {text('Right')}
        </Cell>
      </Layout>
    </Cell>

    <Cell span={12}>
      {text('Footer')}
    </Cell>
  </Layout>;

function text(text) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
        background: '#F0F4F7'
      }}
      >
      <Heading>{text}</Heading>
    </div>
  );
}
