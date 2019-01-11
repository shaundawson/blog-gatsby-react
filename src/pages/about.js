import React from 'react'
import Layout from '../components/layout'
import './post.css'





const About= () => (
  <Layout>
  <section className="hero is-fullheight about-hero">
  <div className="hero-body">
    <div className="container">
    </div>
    <div className="columns">
    <div className="container is-fluid"> 
          <div className="column is-12">
              <h2 className="subtitle is-4 is-light">
              <br></br>
              <br></br>
              <br></br>

              Black Friends Dinner is a table side conversation where guests 
              navigate what it means to value Black lives in a world that doesn't.
               This pro-Black podcast happens over soul food and drink made with 
               love by Nandi Kayyy, resident Black Non-Binary Bae. Smashing the 
               rules of "appropriate dinner-time conversation" anything at this table. 
               It's all Black, all the time.
              </h2>
              <br></br>
              <p className="has-text">
                  <a className="button is-medium is-primary" href='/contact'>
      Contact Us
    </a>
    <br></br>
    <br></br>
              </p>
              </div>
          </div>
      </div>
  </div>

</section>
</Layout>
)

export default About