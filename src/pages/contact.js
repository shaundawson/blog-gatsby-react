import React from 'react';
import Layout from '../components/layout';
import 'bulma/css/bulma.css';
import './post.css';


const Contact = () => (
  <Layout>
  <section>
  <div className="contact contact-hero is-centered">
  <h2 className="title is-light"> Send us a message
  </h2>
    <div className="field">
      <label className="label is-light is-small">Name</label>
        <div className="control">
        <input className="input is-dark is-small" type="text" placeholder="Your Name"/>
        </div>
    </div>
    <form accept-charset="UTF-8" action="https://formkeep.com/f/4af43b11e3a2" method="POST" name="utf8">
        <div className="field">
        <label className="label is-light is-small">Email</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-dark is-small" type="email" name="email" placeholder="Your Email" />
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
  </div>
</div>

<div className="field">
  <label className="label is-light is-small">Message</label>
  <div className="control">
    <textarea className="textarea is-dark is-small" name="message" placeholder="Type message here"></textarea>
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
</section>
</Layout>
)

export default Contact