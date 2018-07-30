# Layout

`<Layout/>` is a compound component of `<Layout/>` and `<Cell/>`.
They are used to lay out content with ease.

```js
import { Layout, Cell } from 'wix-style-react/Layout';

// Three column layout
export default () =>
  <Layout>
    <Cell span={4}>Left</Cell>
    <Cell span={4}>Middle</Cell>
    <Cell span={4}>Right</Cell>
  </Layout>;
```

Wix design layout is divided into 12 columns. `<Cell/>`s accept `span`
prop to set how many columns a `<Cell/>` should occupy. It is 12 by
default.

- `<Cell>` must be immediate children of the `<Layout>`.
- To fit the whole horizontal space the span sum of all sibling `<Child>` components should be 12.
- If the sum of sibling `<Child>` components exceeds 12, the exceeding `<Cell>` components are moved to the next row. It is fine as sometimes it is the desired behaviour. 
- By nesting multiple `<Layout>` components it is possible to achieve width fractions which are not compliant with the Wix design. It is not advised and such cases should be discussed with the ux.

### Cell

| propName | propType | defaultValue | isRequired | description                                                                        |
| ---      | ---      | ---          | ---        | ---                                                                                |
| children | `node`   |              | -          | any node to be rendered inside                                                     |
| span     | `number` | 12           | -          | how many columns should this cell occupy. Can be any number from 1 to 12 inclusive |
| vertical | `bool`   | 1            | -          | whether to align children vertically to the middle                                 |
