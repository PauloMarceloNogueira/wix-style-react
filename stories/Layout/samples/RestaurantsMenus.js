import React from 'react';
import Card from 'wix-style-react/Card';
import {Layout, Cell} from 'wix-style-react/Layout';
import styles from '../Example.scss';

export default () => (
  <div className={styles.exampleContainer}>
    <Layout>
      <Cell span={4}>{food()}</Cell>
      <Cell span={4}>{food()}</Cell>
      <Cell span={4}>{food()}</Cell>
      <Cell span={4}>{food()}</Cell>
      <Cell span={4}>{food()}</Cell>
    </Layout>
  </div>
);

function food() {
  return (
    <Card>
      <Card.Header withoutDivider title="Food Cell"/>
      <Card.Content>
        <div style={{height: '150px'}}/>
      </Card.Content>
    </Card>);
}
