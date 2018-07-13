# Layout
The purpose of the following layouting components is to provide a lightweight alternative to the currently used Bootstrap.js grid system.

## Wix Layout Design
Wix design is based on a 12 column layout. Every content area must be horizontally divided into fractions n/12, where n is a whole number from 1 to 12.

## Components
- The layouting system exposes two components - `<Layout>` and `<Cell>`.
- `<Layout>` is responsible for positioning the child `<Cell>` components.
- `<Cell>` component defines how many columns out of 12 must this content span.
- `<Cell>` must be immediate children of the `<Layout>`.
- The behaviour when other elements than `<Cell>` are used as direct children for `<Layout>` is not specified.
- To fit the whole horizontal space the span sum of all sibling `<Child>` components should be 12.
- If the sum of sibling `<Child>` components exceeds 12, the exceeding `<Cell>` components are moved to the next row. It is fine as sometimes it is the desired behaviour. 
- By nesting multiple `<Layout>` components it is possible to achieve width fractions which are not compliant with the Wix design. It is not advised and such cases should be discussed with the ux.

### Layout

The gap property can be used to change the gutter size. It accepts string so one can pass any unit, but pixels should cover majority of the cases.

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| gap | string | 30px | - | The gutter size |

### Cell

If stacked-up cells are needed, `span={12}` should be added to all of them so each of them is moved to the next row.

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| span | number | 1 | - | The columns span of this cell |

## Browser support
The components use CSS Grid internally, which is supported by all major browsers. However, IE11 has an older CSS Grid specification implemented and there exists no pollyfils. For IE11 users the elements are layed out using a flexbox fallback. The rendered UI is not identical but usable.
