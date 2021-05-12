import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Code, Headings } from './src/components/PostComponents'

const components = {
  h2: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
}

export const wrapMDX = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
