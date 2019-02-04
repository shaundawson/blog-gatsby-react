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
    <section className="hero has-bg-img is-medium">
    <div class="dropdown is-right">
    <div class="dropdown-trigger">
      <button class="button is-warning" onClick={this.toggleSub}>
        <span>Subscribe</span>
        <span class="icon is-small">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class= { this.state.isActive ? 'dropdown-menu is-active' : 'dropdown-item'}>
      <div class="dropdown-content">
        <div class="dropdown-item">
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
    <iframe src="https://embeds.audioboom.com/posts/7157964-episode-004-black-boi-flyyy/embed/v4?eid=AQAAAKErU1zMOG0A" 
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
