export const imports = {
  'docs/header.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-header" */ 'docs/header.mdx'
    ),
  'docs/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-index" */ 'docs/index.mdx'
    ),
  'docs/list.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-list" */ 'docs/list.mdx'
    ),
  'docs/login.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-login" */ 'docs/login.mdx'
    ),
  'docs/private-route.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-private-route" */ 'docs/private-route.mdx'
    ),
  'src/pages/markdown/about.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-markdown-about" */ 'src/pages/markdown/about.md'
    ),
  'src/pages/markdown/rubric.md': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-markdown-rubric" */ 'src/pages/markdown/rubric.md'
    ),
}
