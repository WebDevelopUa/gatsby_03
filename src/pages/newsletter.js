import React from 'react'
import Layout from '../components/Layout'

const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Just subscribe!</h2>
          <h4>enter you name & email</h4>
          <form
            className="contact-form"
            name="contact"
            netlify
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
            <button type="submit" className="btn form-control submit-btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
