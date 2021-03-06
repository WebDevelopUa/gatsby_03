import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const NotFoundPage = () => (
  <Layout>
    <Seo title="Error Page" />
    <section className="error-page">
      <div className="page-center">
        <span>404</span>
        <h3>Error page</h3>
        <Link to={`/`} className="btn">
          back to Homepage
        </Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
