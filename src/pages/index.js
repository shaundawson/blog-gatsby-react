import React from 'react'
import { Link, graphql } from 'gatsby'
import './post.css';
import Layout from '../components/layout'
import Iframe from 'react-iframe'

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
       Where we navigate what #alllivesmattermeans in a world where they don't.<br></br>
       
      </h2>
    </div>
  </div>
</section>
<div class="line">
<hr>
</hr>
<h2 class="subtitle is-4">Latest Episode</h2>
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
        <br></br>
        What is the “afro- future” of music? We’ve seen it change so drastically over the past 15 years. From records and tapes, 
        to cds and mp3s,to limewire and napster, now we stream everything. It’s made a significant impact on how professional 
        musicians make money, and it’s lifted the gate on who can not only MAKE music, but also get it heard, i.e. the Internet. 
        “Music ain’t what it used to be” has never been so relevant. How is this statement relevant when we look at Black music 
        and it’s impact over this same amount of time...
        
      </p>
    </div>
    <br></br>
    <a class="button is-warning" href="/episodes">View All Episodes</a>
  </div>
</article>

    </Layout>
  )
}

export default IndexPage;
