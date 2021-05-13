import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'

export const query = graphql`
  query GetCategories($category: String) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM Do, YYYY")
          slug
          readTime
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

const CategoryTemplate = props => {
  const {
    pageContext: { category },
  } = props
  const {
    data: {
      allMdx: { nodes: posts },
    },
  } = props

  return (
    <Layout>
      <Seo title={`${category.toUpperCase()} Category Page`} />
      <Hero />
      <Posts posts={posts} title={`${category} category`} />
    </Layout>
  )
}

export default CategoryTemplate
