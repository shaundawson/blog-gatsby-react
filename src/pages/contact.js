import React from 'react'
import Layout from '../components/layout'
import './post.css';

const Contact = () => (
  <Layout>
  <div className="contact">
  <h1 class="title is-3">
  Send a message.
</h1>
  <div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input is-dark" type="text" placeholder="Your Name"/>
  </div>
</div>

<div className="field">
  <label className="label">Email</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-dark" type="email" placeholder="Your Email"/>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
  </div>
</div>

<div className="field">
  <label className="label">Message</label>
  <div className="control">
    <textarea className="textarea is-dark" placeholder="Textarea"></textarea>
  </div>
</div>

<div className="field is-grouped">
  <div className="control">
    <button className="button is-dark">Submit</button>
  </div>
</div>
</div>
</Layout>
)

export default Contact