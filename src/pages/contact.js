import React, { Component } from 'react';  
import Layout from '../components/layout';
import './post.css';
import axios from 'axios';


const API_PATH = 'https://github.com/shaundawson/blog-gatsby-react/blob/master/public/inc/index.php';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactName: '',
      contactEmail: '',
      contactMessage: '',
      mailSent: false,
      error: null
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
  };

  render() {
    return (
  <Layout>
  <section id= "contact">
  <div className="contact contact-hero is-centered">
  <h2 className="title is-light"> Send us a message
  </h2>
  <form action="#" id="contactForm" name="contactForm">
    <div className="field">
      <label className="label is-light is-small" id="contactName">Name</label>
        <div className="control">
        <input className="input is-dark is-small" type="text" size={35}  name="contactName" placeholder="Your Name"
        value={this.state.contactName}
        onChange={e => this.setState({ contactName: e.target.value })}
        />
        
        </div>
    </div>
        <div className="field">
        <label className="label is-light is-small">Email</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-dark is-small" type="email" size={35} name="contactEmail" id="contactEmail" placeholder="Your Email" 
    value={this.state.contactEmail}
    onChange={e => this.setState({ contactEmail: e.target.value })}
    />
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
  </div>
</div>

<div className="field">
<label className="label is-light is-small">Subject</label>
  <div className="control">
  <input className="input is-dark is-small" type="text" size={35} name="contactSubject" placeholder="Subject"/>
  </div>
</div>

<div className="field">
  <label className="label is-light is-small">Message</label>
  <div className="control">
    <textarea className="textarea is-dark is-small" name="contactMessage" placeholder="Type message here" 
    onChange={e => this.setState({ contactMessage: e.target.value })}
    å
    />
  </div>
</div>
<br></br>

<div className="field is-grouped">
    <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
    <div className="control">
  </div>
</div>
<div>
  {this.state.mailSent &&
    <div>Thank you for contcting us.</div>
  }
</div>
</form>
</div>
</section>
</Layout>
);
}
}