import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
      nodes {
        excerpt
        frontmatter {
          slug
          date(formatString: "MMMMM Do, YYYY, ")
          author
          category
          readTime
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  const titleRecentPosts = `Recent posts`

  return (
    <Layout>
      <Hero showPerson />
      <Posts posts={posts} title={titleRecentPosts} />
    </Layout>
  )
}

export default IndexPage
