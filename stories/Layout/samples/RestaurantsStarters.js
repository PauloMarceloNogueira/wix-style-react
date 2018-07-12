import React from 'react';
import PropTypes from 'prop-types';
import {Layout, Cell} from '../../../src/Layout';
import styles from '../Example.scss';
import Card from '../../../src/Card';
import Text from '../../../src/Text';

export default () => (
  <div data-hook="restaurants-menus" className={styles.exampleContainer}>
    <Layout>
      <Cell span={8}>
        <Card>
          <Card.Header
            withoutDivider
            title="Sections in Menu"
            />
          <Card.Content>
            <Layout gap="20px">
              <Cell span={4}><FoodCell title="Stuffed Rolls"/></Cell>
              <Cell span={4}><FoodCell title="Tuna and Bread"/></Cell>
              <Cell span={4}><FoodCell title="Fancy Shrimps"/></Cell>
              <Cell span={4}><FoodCell title="Samosas"/></Cell>
              <Cell span={4}><FoodCell title="Cheese and Mint"/></Cell>
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

function FoodCell({title}) {
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

FoodCell.propTypes = {
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
