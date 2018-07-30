/* eslint-disable react/jsx-key, react/prop-types */
import React from 'react';
import styles from './styles.scss';

import {Layout, Cell} from 'wix-style-react/Layout';

const GreyBox = ({children, height}) =>
  <div
    className={styles.greyBox}
    style={{height}}
    children={children}
    />;

const childrenExample = [
  {
    label: 'single cell',
    value: <Cell><GreyBox children="hello"/></Cell>
  },
  {
    label: 'two cells',
    value: [
      <Cell><GreyBox children="hello"/></Cell>,
      <Cell><GreyBox children="hello again"/></Cell>
    ]
  },
  {
    label: 'two cells as columns',
    value: [
      <Cell span={6}><GreyBox children="hello"/></Cell>,
      <Cell span={6}><GreyBox children="hello again"/></Cell>
    ]
  },
  {
    label: 'three cells and one row',
    value: [
      <Cell span={4}><GreyBox children="left"/></Cell>,
      <Cell span={4}><GreyBox children="middle"/></Cell>,
      <Cell span={4}><GreyBox children="right"/></Cell>,
      <Cell><GreyBox children="full"/></Cell>
    ]
  },
  {
    label: 'various height cells',
    value: [[2, 30], [3, 60], [7, 90]]
      .map(([span, height]) =>
        <Cell span={span}><GreyBox height={height} children={`${height}px`}/></Cell>,
      )
  },
  {
    label: 'vertically aligned cells',
    value: [[2, 30], [3, 60], [7, 90]]
      .map(([span, height]) =>
        <Cell span={span} vertical><GreyBox height={height} children={`${height}px`}/></Cell>,
      )
  }
];

export default {
  category: 'Components',
  storyName: 'Layout',
  component: Layout,
  componentPath: '../../src/Layout/Layout',
  exampleImport: `import { Layout, Cell } from 'wix-style-react/Layout';`,

  componentProps: {
    children: childrenExample[0].value
  },

  exampleProps: {
    children: childrenExample
  }
};
