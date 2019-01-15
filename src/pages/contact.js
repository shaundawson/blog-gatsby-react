import React from 'react'
import Layout from '../components/layout'


const Contact = () => (
  <Layout>
  <div className="contact contact-hero">
    <div className="field">
      <label className="label is-light is-medium">Name</label>
        <div className="control">
        <input className="input is-dark is-medium" type="text" placeholder="Your Name"/>
        </div>
    </div>
    <form action="sendEail.php" method="post" id="contactForm" name="contactForm">
        <div className="field">
        <label className="label is-light is-medium">Email</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-dark is-medium" type="email" placeholder="Your Email"/>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
  </div>
</div>

<div className="field">
  <label className="label is-light is-medium">Message</label>
  <div className="control">
    <textarea className="textarea is-dark is-large" placeholder="Type message here"></textarea>
  </div>
</div>
<br></br>

<div className="field is-grouped">
  <div className="control">
    <button className="button is-primary is-large">Submit</button>
  </div>
</div>
</form>
</div>
</Layout>
)

export default Contact