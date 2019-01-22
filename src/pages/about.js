import React from 'react'
import Layout from '../components/layout'
import '../pages/post.css';

const About= () => (
  <Layout>
  <section className="hero is-medium about-hero">
  <div className="hero-body">
      <h2 className="title is-3 is-light"> About Black Friends Dinner
      </h2>
        <h2 className="subtitle is-5">
          Black Friends Dinner is a table side conversation where guests 
          navigate what it means to value Black lives in a world that doesn't.
          This pro-Black podcast happens over soul food and drink made with 
          love by Nandi Kayyy, resident Black Non-Binary Bae. Smashing the 
          rules of "appropriate dinner-time conversation" anything goes at this table. 
          It's all Black, all the time.
         </h2>
           <p className="has-text">
             <a className="button is-medium is-warning" href='/contact'>
             Contact Us
             </a>
    <br></br>
    <br></br>
              </p>
              </div>
</section>
</Layout>
)

export default About