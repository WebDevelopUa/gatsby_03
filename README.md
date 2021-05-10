# GatsbyJS 3 (Static site generator) + MDX

### Pet-project Blog generated using [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default) & MDX

## [DEMO link of Frontend](https://gatsby-v3-mdx.netlify.app/) deployed on Netlify

- Image From External (CDN) Media Storage At [Cloudinary](https://cloudinary.com/)
- Backend for Content => [GitHub repo](https://github.com/...)
- [Frontend](https://gatsby-v3-mdx.netlify.app/) deployed on Netlify => `public` folder

> [localhost:8000](http://localhost:8000) version of Frontend requires [localhost:1337](http://localhost:1337) => run Backend: [Back-end GitHub repo](https://github.com/WebDevelopUa/gatsby_02-strapi_api)

---

- [Gatsby 3.0](https://www.gatsbyjs.com)
- [Quick Start](https://www.gatsbyjs.com/docs/quick-start)
- [Gatsby Starters](https://www.gatsbyjs.com/starters/?v=3)
- [Hello world starter](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world/)
- [Gatsby Plugin Library](https://www.gatsbyjs.com/plugins/)
- [React icons](https://react-icons.github.io/react-icons/)
- [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image)
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

# Errors

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

---

# Markdown Cheat Sheet

Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

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
