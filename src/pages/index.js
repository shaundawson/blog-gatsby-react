import React from 'react'
import { Link, graphql } from 'gatsby'
import './post.css';
import Layout from '../components/layout'

const IndexPage = (props) => {
  return (
    <Layout>
    <section class="hero is-medium has-bg-img">
    <div class="hero-body">
      <div class="container">
      <h4 class="subtitle">
      We Are the Afro-Culture
    </h4>
        <h1 class="title">
          Episode 002
        </h1>
        <h2 class="subtitle">
          We Are the Afro-Culture
        </h2>
      </div>
    </div>
  </section>
    </Layout>
  )
}

export default IndexPage;
