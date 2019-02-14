import React from 'react'
import Layout from '../components/layout'
import './post.css'


const Contact = () => (
  <Layout>
  <div className="contact contact-hero is-centered">
  <h2 className="title is-3 is-light"> Send us a message
  </h2>
  <iframe src="https://iamsdawson.formstack.com/forms/blackfriendsdinner" 
  height="650" 
  width="100%" 
  scrolling="no"
  allow="encrypted-media"
  >
  </iframe>
   
</div>
</Layout>
)

export default Contact