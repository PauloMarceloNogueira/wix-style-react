import React from 'react';
import PropTypes from 'prop-types';
import {Layout, Cell} from 'wix-style-react/Layout';
import styles from '../Example.scss';
import Card from 'wix-style-react/Card';
import Text from 'wix-style-react/Text';

export default () => (
  <div className={styles.exampleContainer}>
    <Layout>
      <Cell span={8}>
        <Card>
          <Card.Header
            withoutDivider
            title="Sections in Menu"
            />
          <Card.Content>
            <Layout gap="20">
              <Cell span={4}><FoodItem title="Stuffed Rolls"/></Cell>
              <Cell span={4}><FoodItem title="Tuna and Bread"/></Cell>
              <Cell span={4}><FoodItem title="Fancy Shrimps"/></Cell>
              <Cell span={4}><FoodItem title="Samosas"/></Cell>
              <Cell span={4}><FoodItem title="Cheese and Mint"/></Cell>
            </Layout>
          </Card.Content>
        </Card>
      </Cell>
      <Cell span={4}>
        <Layout>
          <Cell span={12}>
            <Section title="Menu Info" height="200px"/>
          </Cell>
          <Cell span={12}>
            <Section title="Online Ordering" height="300px"/>
          </Cell>
        </Layout>
      </Cell>
    </Layout>
  </div>
);

function FoodItem({title}) {
  return (
    <div
      style={{
        height: '300px',
        background: 'aliceblue',
        padding: '10px',
        borderRadius: '12px'
      }}
      >
      <Text>{title}</Text>
    </div>
  );
}

FoodItem.propTypes = {
  title: PropTypes.string
};


function Section({title, height}) {
  return (
    <Card>
      <Card.Header
        withoutDivider
        title={title}
        />
      <Card.Content>
        <div style={{height}}/>
      </Card.Content>
    </Card>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  height: PropTypes.string
};
