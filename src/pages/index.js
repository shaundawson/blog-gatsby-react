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
    episodes (7) </a></h1> 
    <h2>Episode 7 | 03/21/19</h2>
    <h3>Assigned Sex</h3>
    <h3>54 min</h3>
<hr></hr>
    <h1 className="title is-latest">
   <a href ="/episode%206%20"> <i className="fas fa-play"></i> 
    LISTEN TO FULL EPISODE </a> </h1>
    <p>
    Our resident producer, audio engineer and my personal boo, Shaun dug deep to let us in on the making of their documentary Assigned Sex. The 30 minute short presents uncomfortable perspectives from both trans and cisgender people of color with the hopes of starting a necessary conversation to reduce stigma, eliminate bias and increase inclusion. Shaun explores gender and sexuality through the lens of Angel, a 23- year old preacher’s kid assigned male at birth
    <br></br>
    <a href ="/episode%207"> 
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
