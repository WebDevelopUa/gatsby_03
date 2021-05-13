import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
import Seo from '../components/Seo'

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          slug
          date(formatString: "MMMM Do, YYYY")
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

const PostsPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  const titleAllPosts = `All posts`

  return (
    <Layout>
      <Seo title="All Posts Page" />
      <Hero />
      <Posts posts={posts} title={titleAllPosts} />
    </Layout>
  )
}

export default PostsPage
