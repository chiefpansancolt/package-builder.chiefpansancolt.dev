import withMarkdoc from '@markdoc/next.js'

import withSearch from './src/markdoc/search.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'ts', 'tsx'],
  webpack(config, { defaultLoaders }) {
    // @markdoc/next.js prepends Next's layer-less default SWC loader to the
    // .md rule. Next >= 16.2.6 rejects that for pages that export metadata, and
    // Next already applies the layer-aware loaders to page extensions.
    for (const rule of config.module.rules) {
      if (
        Array.isArray(rule.use) &&
        rule.use.includes(defaultLoaders.babel) &&
        rule.use.some((u) => u.loader?.includes('@markdoc/next.js'))
      ) {
        rule.use = rule.use.filter((u) => u !== defaultLoaders.babel)
      }
    }
    return config
  },
}

export default withSearch(
  withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig),
)
