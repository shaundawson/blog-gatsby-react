import React from 'react'
import Layout from '../components/layout'



const About= () => (
  <Layout>
  <div className="hero-body">
  <div className="container has-text">
      <div className="columns is-vcentered">
          <div className="column is-8">
              <h1 className="title is-2">
                  About Black Friends Dinner
              </h1>
              <br></br>
              <h2 className="subtitle is-3">
              Black Friends Dinner is a table side conversation where guests 
              navigate what it means to value Black lives in a world that doesn't.
               This pro-Black podcast happens over soul food and drink made with 
               love by Nandi Kayyy, resident Black Non-Binary Bae. Smashing the 
               rules of "appropriate dinner-time conversation" anything at this table. 
               It's all Black, all the time.
              </h2>
              <br></br>
              <p className="has-text">
                  <a className="button is-medium is-info is-outlined">
      Learn more
    </a>
              </p>
          </div>
      </div>
  </div>
</div>
</Layout>
)

export default About