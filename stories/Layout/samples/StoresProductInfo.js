import React from 'react';

import {Layout, Cell} from 'wix-style-react/Layout';
import Card from 'wix-style-react/Card';
import Text from 'wix-style-react/Text';

import styles from '../Example.scss';

export default () => (
  <div className={styles.exampleContainer}>
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
