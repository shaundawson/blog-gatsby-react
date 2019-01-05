import React from 'react'
import { Link, graphql } from 'gatsby'
import './post.css';
import Layout from '../components/layout'

const IndexPage = (props) => {
  return (
    <Layout>
    <section class="hero is-fullheight is-black is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Black Friends Dinner
      </h1>
      <h2 class="subtitle is-3">
       Where we navigate what #alllivesmattermeans in a world where they don't.
      </h2>
    </div>
  </div>
</section>
<div class="line">
<hr>
</hr>
<h2 class="subtitle is-4">Latest Show</h2>
</div>
  <article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://i.imgur.com/rLaAAZ2.png"/>
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>Black Friends Dinner</strong> <small>Ep 002: We Are the Afro-Culture</small> <small>85m</small>
        <br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-reply"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-retweet"></i></span>
        </a>
        <a class="level-item">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
      </div>
    </nav>
  </div>
</article>
    </Layout>
  )
}

export default IndexPage;
