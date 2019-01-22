import React from 'react';
import './post.css';
import Layout from '../components/layout';
require ('responsive-iframe');



const IndexPage = (props) => {
  return (
    <Layout>
    <section className="hero has-bg-img is-large">
    </section>
    <section className="section">
  <div className="container">
    <h1 className="title is-4">Latest Episode</h1>
    <div className="video-container is-fluid">
    <center>
    <iframe src="https://embeds.audioboom.com/posts/7146191-episode-003-hip-hop-made-the-instagram-star/embed/v4?eid=AQAAABVtRlzPCm0A" 
    height="315" 
    width="290" 
    allowfullscreen="" 
    frameborder="0">
    </iframe>
    </center>
    </div>
      </div>
    </section>
    </Layout>
  )
}

export default IndexPage;
