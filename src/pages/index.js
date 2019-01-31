import React from 'react';
import './post.css';
import Layout from '../components/layout';
import 'bulma/css/bulma.css'



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
    <div className="video-container">
    <center>
    <iframe src="https://embeds.audioboom.com/posts/7157964-episode-004-black-boi-flyyy/embed/v4?eid=AQAAAKErU1zMOG0A" 
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
