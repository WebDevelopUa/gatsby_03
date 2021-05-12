import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Headings } from './src/components/PostComponents'

const components = {
  h2: Headings.myH2,
}

export const wrapMDX = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
