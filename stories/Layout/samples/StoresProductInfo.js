import React from 'react';

import {Layout, Cell} from '../../../src/Layout';

import styles from '../Example.scss';

import Card from '../../../src/Card';
import Text from '../../../src/Text';

export default () => (
  <div data-hook="restaurants-menus" className={styles.exampleContainer}>
    <Layout>
      <Cell span={8}>
        <Layout>
          <Cell span={12}>
            <Card>
              <Card.Header withoutDivider title="Images & Videos"/>
              <Card.Content>
                <Layout>
                  <Cell span={6}><Image/></Cell>
                  <Cell span={6}><Image/></Cell>
                </Layout>
              </Card.Content>
            </Card>
          </Cell>
          <Cell span={12}>
            <Card>
              <Card.Header withoutDivider title="Product Info"/>
            </Card>
          </Cell>
        </Layout>
      </Cell>
      <Cell span={4}>
        <Layout>
          <Cell span={12}>
            <Card>
              <Card.Header withoutDivider title="Visibility"/>
            </Card>
          </Cell>
          <Cell span={12}>
            <Card>
              <Card.Header withoutDivider title="Promote"/>
            </Card>
          </Cell>
        </Layout>
      </Cell>
    </Layout>
  </div>
);

function Image() {
  return (
    <div
      style={{
        height: '50px',
        background: 'aliceblue',
        padding: '10px',
        borderRadius: '12px'
      }}
      >
      <Text>Add Images</Text>
    </div>);
}
