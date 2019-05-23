export const imports = {
  'docs/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-index" */ 'docs/index.mdx'
    ),
  'docs/actions/graph-actions.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-actions-graph-actions" */ 'docs/actions/graph-actions.mdx'
    ),
  'docs/actions/competencies-actions.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-actions-competencies-actions" */ 'docs/actions/competencies-actions.mdx'
    ),
  'docs/actions/user-actions.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-actions-user-actions" */ 'docs/actions/user-actions.mdx'
    ),
  'docs/components/header.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-components-header" */ 'docs/components/header.mdx'
    ),
  'docs/components/KeyboardListener.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-components-keyboard-listener" */ 'docs/components/KeyboardListener.mdx'
    ),
  'docs/components/login.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-components-login" */ 'docs/components/login.mdx'
    ),
  'docs/components/LevelThermometer.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-components-level-thermometer" */ 'docs/components/LevelThermometer.mdx'
    ),
  'docs/components/list.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-components-list" */ 'docs/components/list.mdx'
    ),
  'docs/components/logo.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-components-logo" */ 'docs/components/logo.mdx'
    ),
  'docs/components/NameInput.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-components-name-input" */ 'docs/components/NameInput.mdx'
    ),
  'docs/components/private-route.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-components-private-route" */ 'docs/components/private-route.mdx'
    ),
  'docs/components/NightingaleChart.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-components-nightingale-chart" */ 'docs/components/NightingaleChart.mdx'
    ),
  'docs/components/PointSummaries.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-components-point-summaries" */ 'docs/components/PointSummaries.mdx'
    ),
  'docs/components/TitleSelector.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-components-title-selector" */ 'docs/components/TitleSelector.mdx'
    ),
  'docs/components/Track.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-components-track" */ 'docs/components/Track.mdx'
    ),
  'docs/components/TrackSelector.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-components-track-selector" */ 'docs/components/TrackSelector.mdx'
    ),
  'docs/reducers/competencies-reducer.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-reducers-competencies-reducer" */ 'docs/reducers/competencies-reducer.mdx'
    ),
  'docs/reducers/graph-reducer.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-reducers-graph-reducer" */ 'docs/reducers/graph-reducer.mdx'
    ),
  'docs/reducers/users-reducer.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-reducers-users-reducer" */ 'docs/reducers/users-reducer.mdx'
    ),
}
