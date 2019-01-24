import React from 'react';
import './post.css';
import Layout from '../components/layout';




const IndexPage = (props) => {
  return (
    <Layout>
    <section className="hero has-bg-img is-large">
    </section>
    <section className="section">
  <div className="container">
    <h1 className="title is-latest">
    <i className="fas fa-arrow-down"></i>
    latest episode</h1> 
    <div className="video-container is-fluid">
    <center>
    <iframe src="https://embeds.audioboom.com/posts/7146191-episode-003-hip-hop-made-the-instagram-star/embed/v4?eid=AQAAABVtRlzPCm0A" 
    height="350" 
    width="350" 
    >
    </iframe>
    </center>
    </div>
      </div>
    </section>
    </Layout>
  )
}

export default IndexPage;
