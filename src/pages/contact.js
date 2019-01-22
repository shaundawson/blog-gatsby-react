import React from 'react'
import Layout from '../components/layout'
import './post.css'


const Contact = () => (
  <Layout>
  <div className="contact contact-hero is-centered">
  <h2 className="title is-3 is-light"> Send us a message
  </h2>
    <div className="field">
      <label className="label is-light is-medium">Name</label>
        <div className="control">
        <input className="input is-dark is-medium" type="text" placeholder="Your Name"/>
        </div>
    </div>
    <form action="https://formspree.io/nandikayyy@blackfriendsdinner.com" method="POST" name="name">
        <div className="field">
        <label className="label is-light is-medium">Email</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-dark is-medium" type="email" name="_reply" placeholder="Your Email" />
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
  </div>
</div>

<div className="field">
  <label className="label is-light is-medium">Message</label>
  <div className="control">
    <textarea className="textarea is-dark is-medium" name="message" placeholder="Type message here"></textarea>
  </div>
</div>
<br></br>

<div className="field is-grouped">
  <div className="control">
    <button className="button is-warning is-medium" type="submit">Send</button>
  </div>
</div>
</form>
</div>
</Layout>
)

export default Contact