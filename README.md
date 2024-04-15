Using Viz-SDK

<details>

<summary>React</summary>

Add npm package to your project

```bash
   yarn add @viz-sdk/react
```

To use the dashboard import it in your component

```ts
   import { VizDashboard } from "viz-sdk"
   ...

   return (
    <VizDashboard {..props} />
   )
```
You must provide all props:

- `queryEngineEndpoint` URL for query engine
```ts
  <VizDashboard queryEngineEndpoint="https://endpoint.com/v1/query-engine"/>
```

</details>

<details>

<summary>Browser</summary>

Include viz-sdk library in your html

```html
   <script src="https://cdn.viz-sdk.com/lib/vizdk.min.js"></script>
```

To use the dashboard use the custom html element tag

```html
   <viz-dashboard queryEngineEndpoint="https://endpoint.com/v1/query-engine"></viz-dashboard>
```

</details>

<details>

<summary>Saving Views</summary>

Viz-SDK provides default templates for pie-chart and bar-chart, to provide custom views/templates they can added as children elements 


```ts
  import { VizDashboard } from "viz-sdk"
   ...

   return (
    <VizDashboard {..props} >
    { children }
    </VizDashboard>
   )
```

- Each child element must have `title` and `id`
- If metric and group fields are provided, the length of fields must match

```ts
  metricFields: string[]
  groupByFields: string[]
```

or

```ts
  metricField: string
  groupByFieldId: string
```

</details>