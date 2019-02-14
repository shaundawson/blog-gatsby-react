import React from 'react';
import './post.css';
import Layout from '../components/layout';
import 'bulma/css/bulma.css'


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
    <div className="dropdown is-right">
    <div className="dropdown-trigger">
      <button className="button is-rounded is-inverted is-outlined is-responsive" onClick={this.toggleSub}>
        Subscribe
      </button>
    </div>
    <div className= { this.state.isActive ? 'dropdown-menu is-active' : 'dropdown-item'}>
      <div className="dropdown-content">
        <div className="dropdown-item">
        <a className="dropdown-item is-light is-small" href="https://itunes.apple.com/us/podcast/black-friends-dinner/id1447664860?mt=2&ls=1&ign-mpt=uo%3D4" target="blank">
        Apple Podcasts
      </a>
      <a className="dropdown-item is-light is-small" href="https://open.spotify.com/show/5xBPxVpKQxE1Ut5TkEWLjH" target="blank">
        Spotify
      </a>
      <a className="dropdown-item is-light is-small" href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hdWRpb2Jvb20uY29tL2NoYW5uZWxzLzQ5ODI3MzgucnNz" target="blank">
      Google Podcasts
      </a>
      <a className="dropdown-item is-light is-small" href="https://audioboom.com/channels/4982738.rss" target="blank">
      RSS
      </a>
        </div>
      </div>
    </div>
  </div>
    </section>
    <section className="section">
  <div className="container">
    <h1 className="title is-latest">
    <i className="fas fa-arrow-down"></i>
    latest episode</h1> 
    <div className="video-container">
    <center>
    <iframe src="https://embeds.audioboom.com/posts/7174452-episode-005-black-and/embed/v4?eid=AQAAAEHuZFw0eW0A" 
    height="350" 
    width="350" 
    allow="encrypted-media"
    >
    </iframe>
    </center>
    </div>
      </div>
    </section>
    </Layout>
    )
  }
}

export default IndexPage;
