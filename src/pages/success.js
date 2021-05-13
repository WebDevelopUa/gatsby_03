import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import Seo from '../components/Seo'

const Success = () => (
  <Layout>
    <Seo title="Success Page" />
    <section className="success-page">
      <div className="page-center">
        <h2>your submission was received !</h2>
        <br />
        <Link to={`/`} className="btn">
          back to Homepage
        </Link>
      </div>
    </section>
  </Layout>
)

export default Success
