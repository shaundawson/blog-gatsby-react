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
  <div className="container">
    
    <div class="columns">
    <div class="column">
    <h1 className="title is-latest">
    <a href="/episodes">
    episodes (6) </a></h1> 
    <h2>S1 E6 | 03/01/19</h2>
    <h3>Black Bawdy</h3>
    <h3>17 min</h3>
<hr></hr>
    <h1 className="title is-latest">
   <a href ="/episode%206%20"> <i className="fas fa-play"></i> 
    LISTEN TO FULL EPISODE </a> </h1>
    <p>
    From appearance and insecurities to agency over our own bodies in the world we live in. What does it mean to walk around in a Black body? Is there an acceptable way to be  Black?? It’s lusted after and its feared...
    <br></br>
    <a href ="/episode%206%20"> 
    READ MORE
    </a>
    </p>
    <hr></hr>
    

    </div>
    <div class="column">
    <div className="form-container">
    <h1 className="title is-latest">
    <i className="fas fa-comments"></i>
    hit us up. </h1> 
    <HubspotForm
    portalId='5429329'
    formId='b05dd7e5-19b3-4319-86be-067a50eb83ec'
    onSubmit={() => console.log('Submit!')}
    onReady={(form) => console.log('Form ready!')}
    loading={<div>Loading...</div>}
    />
    </div>
    </div>



  
    </div>
      </div>
    </section>
    </Layout>
    )
  }
}

export default IndexPage;
