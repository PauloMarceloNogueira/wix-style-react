import React from 'react';
import Card from '../../../src/Card';
import {Layout, Cell} from '../../../src/Layout';
import styles from '../Example.scss';

export default () => (
  <div data-hook="restaurants-menus" className={styles.exampleContainer}>
    <Layout>
      <Cell span={4}>{foodCell()}</Cell>
      <Cell span={4}>{foodCell()}</Cell>
      <Cell span={4}>{foodCell()}</Cell>
      <Cell span={4}>{foodCell()}</Cell>
      <Cell span={4}>{foodCell()}</Cell>
    </Layout>
  </div>
);

function foodCell() {
  return (
    <Card>
      <Card.Header withoutDivider title="Food Cell"/>
      <Card.Content>
        <div style={{height: '150px'}}/>
      </Card.Content>
    </Card>);
}
