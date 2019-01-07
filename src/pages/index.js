import React from 'react'
import { Link, graphql } from 'gatsby'
import './post.css';
import Layout from '../components/layout'


const IndexPage = (props) => {
  return (
    <Layout>
    <section class="hero is-large is-black is-bold">
  <div class="hero-body">
    <div class="container is-fluid">
      <h1 class="title">
        Black Friends Dinner
      </h1>
      <h2 class="subtitle is-3">
       Where we navigate what #alllivesmattermeans in a world where they don't.<br></br>
      </h2>
    </div>
  </div>
</section>
    </Layout>
  )
}

export default IndexPage;
