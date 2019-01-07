import React from 'react'
import Layout from '../components/layout'

const About= () => (
  <Layout>
  <div class="hero-body">
  <div class="container has-text">
      <div class="columns is-vcentered">
          <div class="column is-5">
              <figure class="image is-4by4">
                  <img src="https://i.imgur.com/rLaAAZ2.png" alt=""/>
              </figure>
          </div>
          <div class="column is-6 is-offset-1">
              <h1 class="title is-3">
                  About Black Friends Dinner
              </h1>
              <h2 class="subtitle is-5">
                 Where we navigate what #alllivesmattersmeans in a world where they don't.
              </h2>
              <br></br>
              <p class="has-text">
                  <a class="button is-medium is-info is-outlined">
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