import React from 'react'
import Layout from '../components/layout'


const Contact = () => (
  <Layout>
  <div className="contact contact-hero">
  <div className="field">
  <label className="label is-light">Name</label>
  <div className="control">
    <input className="input is-dark" type="text" placeholder="Your Name"/>
  </div>
</div>

<div className="field">
  <label className="label is-light">Email</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-dark" type="email" placeholder="Your Email"/>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
  </div>
</div>

<div className="field">
  <label className="label is-light">Message</label>
  <div className="control">
    <textarea className="textarea is-dark" placeholder="Textarea"></textarea>
  </div>
</div>
<br></br>

<div className="field is-grouped">
  <div className="control">
    <button className="button is-primary">Submit</button>
  </div>
</div>
</div>
</Layout>
)

export default Contact