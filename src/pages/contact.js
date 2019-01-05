import React from 'react'
import Layout from '../components/layout'
import './post.css';

const Contact = () => (
  <Layout>
  <div className="contact">
  <div className="field">
  <label className="label">Name</label>
  <div className="control">
    <input className="input" type="text" placeholder="Your Name"/>
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Your Email"/>
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
  </div>
</div>

<div class="field">
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
</div>
</div>
</Layout>
)

export default Contact