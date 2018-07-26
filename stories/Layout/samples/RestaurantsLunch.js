import React from 'react';
import PropTypes from 'prop-types';

import {Layout, Cell} from 'wix-style-react/Layout';
import Card from 'wix-style-react/Card';

import styles from '../Example.scss';

export default () => (
  <div className={styles.exampleContainer}>
    <Layout>
      <Cell span={8}>
        <Section title="Sections in Menu" height="450px"/>
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
