# GatsbyJS 3 (Static site generator) + MDX

### Pet-project Blog generated using [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default) & MDX

## [DEMO link of Frontend](https://gatsby-v3-mdx.netlify.app/) deployed on Netlify

- [Frontend](https://gatsby-v3-mdx.netlify.app/) deployed on Netlify => continuous integration from GitHub
- [Frontend](https://gatsby-03.vercel.app) deployed on Vercel => continuous integration from GitHub

---

- [Gatsby 3.0](https://www.gatsbyjs.com)
- [Quick Start](https://www.gatsbyjs.com/docs/quick-start)
- [Gatsby Starters](https://www.gatsbyjs.com/starters/?v=3)
- [Hello world starter](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world/)
- [Gatsby Plugin Library](https://www.gatsbyjs.com/plugins/)
- [React icons](https://react-icons.github.io/react-icons/)
- [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image) - ⚠️ The "fixed" and "fluid" resolvers are now deprecated.
- [Migrating from gatsby-image to gatsby-plugin-image](https://www.gatsbyjs.com/docs/reference/release-notes/image-migration-guide/)
- [Gatsby Image plugin](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#restrictions-on-using-staticimage)
- [Getting Started with Gatsby](https://strapi.io/documentation/developer-docs/latest/developer-resources/content-api/integrations/gatsby.html#create-a-gatsby-app)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/)
- [Adding an Seo Component](https://www.gatsbyjs.com/docs/add-seo-component/)
- **_[Pexels stock photos](https://www.pexels.com/)_**
- **_[PNG photos](https://www.pngitem.com/middle/ixxhTbw_planet-and-space-png-cartoon-transparent-png/)_**
- **_[Completely Free online photo editing](https://www10.lunapic.com/editor/)_**
- [Favicon](https://favicon.io/favicon-generator/)
- [gatsby-image](https://www.gatsbyjs.com/plugins/gatsby-image/) - ⚠️ This package is now deprecated
- [Inkscape](https://inkscape.org/release/inkscape-1.0.2/)
- [Netlify Forms setup](https://docs.netlify.com/forms/setup/)
- [What’s MDX?](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Styled Components](https://www.gatsbyjs.com/docs/how-to/styling/styled-components/)
- [Add components to content using MDX](https://www.gatsbyjs.com/docs/how-to/routing/mdx/)
- [gatsby-remark-images](https://www.gatsbyjs.com/plugins/gatsby-remark-images/)
- [Working with Video](https://www.gatsbyjs.com/docs/how-to/images-and-media/working-with-video/)
- [PropTypes](https://ru.reactjs.org/docs/typechecking-with-proptypes.html)
- [Config Files](https://www.gatsbyjs.com/docs/reference/config-files/)
- [Add components to content using MDX](https://www.gatsbyjs.com/docs/how-to/routing/mdx/)
- [Table of components MDX](https://mdxjs.com/table-of-components)
- [Customizing Markdown Components Gatsby](https://www.gatsbyjs.com/docs/how-to/routing/customizing-components/)
- [prism-react-renderer](https://www.npmjs.com/package/prism-react-renderer)
- [gatsby-plugin-mdx](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-mdx)
- [Adding an Seo Component](https://www.gatsbyjs.com/docs/add-seo-component/)
- [@reach/router](https://www.npmjs.com/package/@reach/router) - ⚠️ - may cause build error (in React17)
- [reach-router](https://www.npmjs.com/package/@gatsbyjs/reach-router) for React17 (not tested)

---

Requirements:

- [Node.js](https://nodejs.org/uk/)
- [Netlify](https://www.netlify.com) - Frontend site + [Newsletter Form](https://app.netlify.com/sites/gatsby-v3-mdx/forms)

---

### Run in terminal

```
npm i
```

### Or install Gatsby project manually:

```
npm i -g gatsby-cli
gatsby --version
npm install -g npm@7.10.0
gatsby new gatsby-starter-default https://github.com/gatsbyjs/gatsby-starter-default
gatsby clean
gatsby develop
```

### Check the result:

- [localhost:8000](http://localhost:8000)
- [localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql)

---

## Netlify Newsletter

Code an HTML form into any page on your site, add a netlify attribute to the
`<form> `tag, and you’ll receive submissions in your Netlify dashboard.
HTML files are parsed directly at deploy time, so there’s no need for you to
make an API call or include extra JavaScript on your site.

```
 <form
    className="contact-form"
    name="newsletter-submission"
    netlify-honeypot="bot-field"
    method="POST"
    data-netlify="true"
    action="/success"
  >
    <input
      type="text"
      name="name"
      placeholder="Your name"
      className="form-control"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Your email"
      className="form-control"
      required
    />
    <input type="hidden" name="bot-field" />
    <input
      type="hidden"
      name="form-name"
      value="newsletter-submission"
    />
    <button type="submit" className="btn form-control submit-btn">
      Subscribe
    </button>
  </form>
```

---

## Creating posts dynamically

1. generate GraphQL [query](http://localhost:8000/___graphql?query=query%20MyQuery%20%7B%0A%20%20allMdx%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20frontmatter%20%7B%0A%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&codeExporterIsOpen=false) for posts

```
query MyQuery {
  allMdx {
    nodes {
      frontmatter {
        slug
      }
    }
  }
}

```

2. paste query to [gatsby-node.js](gatsby-node.js)
3. create [post template](src/templates/post-template.js)
4. use `import { MDXRenderer } from 'gatsby-plugin-mdx'` for `body` content in template
5. generate GraphQL [query](<http://localhost:8000/___graphql?query=query%20MyQuery%20%7B%0A%20%20categories%3A%20allMdx%20%7B%0A%20%20%20%20distinct(field%3A%20frontmatter___category)%0A%20%20%7D%0A%7D%0A&operationName=MyQuery>) for posts categories

```
query MyQuery {
  categories: allMdx {
    distinct(field: frontmatter___category)
  }
}

```

6.  paste query to [gatsby-node.js](gatsby-node.js)
7.  create [category template](src/templates/category-template.js)
8.  restart Gatsby server

---

## [Config Files](https://www.gatsbyjs.com/docs/reference/config-files/)

function **_wrapRootElement_** to wrap App in MDX Provider, that allows to intercept the elements typed in MDX

- [Gatsby Browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/)
- [Gatsby Server Rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/)

make changes in [gatsby-browser](gatsby-browser.js) & [gatsby-ssr](gatsby-ssr.js) with logic in [root-mdx](root-mdx.js)

```jsx
import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const components = {
  h2: props => {
    console.log(props)
    return <h2 {...props}>{props.children}</h2>
  },
}

export const wrapMDX = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
```

```jsx
<h2 title="true">random h2</h2>
```

---

# Errors

##### to avoid deployment errors => delete `package-lock.json`

Netlify => Published deploy => Stop auto publishing => Publish Deploy

> `npm i gatsby-plugin-offline`
>
> npm WARN deprecated core-js@2.6.12: core-js@<3.3 is no longer maintained and not recommended for usage due to the number
> of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x ev
> en if nothing is polyfilled.
> Please, upgrade your dependencies to the actual version of core-js.

> ERROR
>
> (node:3700) [DEP0148] DeprecationWarning: Use of deprecated folder mapping "./" in the "exports" field module
> resolution of the package at D:\projects\gatsby_03\node_modules\postcss-js\package.json.
> Update this package.json to use a subpath pattern like "./\*".

> ERROR #98124 WEBPACK
>
> Generating development JavaScript bundle failed
>
> Can't resolve '/srcpagespost.mdx?type=component' in 'D:\projects\gatsby_03\src\pages'
>
> If you're trying to use a package make sure that '/srcpagespost.mdx?type=component' is installed.
> If you're trying to use a local file make sure that the path is correct.
>
> File: src\pages\post.mdx:4:0
>
> failed Re-building development bundle - 2.369s
> ERROR in ./src/pages/post.mdx 4:0-60
> Module not found: Error: Can't resolve '/srcpagespost.mdx?type=component'
> in 'D:\projects\gatsby*03\src\pages'
> @ ./.cache/\_this_is_virtual_fs_path*/$virtual/async-requires.js 31:11-33:5
> @ ./.cache/app.js 17:0-52 30:0-86 32:27-40 30:0-86
>
> webpack compiled with 1 error
>
> Process finished with exit code 1

---

# Markdown Cheat Sheet

Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements.
It can’t cover every edge case, so if you need more information about any of these elements,
refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax)
and [extended syntax](https://www.markdownguide.org/extended-syntax).

## Basic Syntax

These are the elements outlined in John Grubber’s original design document.
All Markdown applications support these elements.

### Heading

# H1

## H2

### H3

### Bold

**bold text**

### Italic

_italicized text_

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Code

`code`

### Horizontal Rule

---

### Link

[title](https://www.example.com)

### Image

![alt text](src/assets/person.png)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

### Fenced Code Block

```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
