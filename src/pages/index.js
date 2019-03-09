import React from 'react';
import './post.css';
import Layout from '../components/layout';
import 'bulma/css/bulma.css'
import HubspotForm from 'react-hubspot-form';


class IndexPage extends React.Component {

  state = {
    isActive: true,
  }

  toggleSub = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
  return (
    <Layout>
    <section className="hero has-bg-img is-large">
    </section>
    <section className="section">
  <div className="container is-fluid">
    <h1 className="title is-latest">
    <i className="fas fa-arrow-down"></i>
    hit us up. </h1> 
    <div className="form-container">
    <HubspotForm
    portalId='5429329'
    formId='b05dd7e5-19b3-4319-86be-067a50eb83ec'
    onSubmit={() => console.log('Submit!')}
    onReady={(form) => console.log('Form ready!')}
    loading={<div>Loading...</div>}
    />
    </div>
      </div>
    </section>
    </Layout>
    )
  }
}

export default IndexPage;
