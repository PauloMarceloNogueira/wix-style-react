import React from 'react';
import PropTypes from 'prop-types';
import {Layout, Cell} from '../../../src/Layout';
import styles from '../Example.scss';
import Card from '../../../src/Card';

export default () => (
  <div data-hook="restaurants-menus" className={styles.exampleContainer}>
    <Layout>
      <Cell span={8}>
        <Section title="Streched Card" strech={true}/>
      </Cell>
      <Cell span={4}>
        <Layout>
          <Cell span={12}>
            <Section title="Some Panel" height="200px"/>
          </Cell>
          <Cell span={12}>
            <Section title="Some Panel" height="300px"/>
          </Cell>
        </Layout>
      </Cell>
    </Layout>
  </div>
);

function Section({title, height, strech}) {
  return (
    <Card stretchVertically={strech}>
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
