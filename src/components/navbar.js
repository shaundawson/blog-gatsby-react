import React from 'react';

class Header extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar is-purple"
          aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
          <span className="icon" style={{ color: '#fff',}}>
          <i className="fas fa-headphones"></i>
        </span>
            <span>Home</span>
          </a>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <a className="navbar-item" href="/about">
              About
            </a>
            <a className="navbar-item" href="/episodes">
              Episodes
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
             Subscribe
            </a>
            <div className="navbar-dropdown">
            <a className="navbar-item">
            Google Play
          </a>
          <a class="navbar-item">
            Itunes
          </a>
          <a class="navbar-item">
            Spotify
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item">
            RSS
          </a>
            </div>
          </div>
          </div>
          <div className="navbar-end">
        <a className="navbar-item" href="https://instagram.com/blackfriendsdinner" target="blank">
        <span className="icon" style={{ color: '#fff',}}>
          <i className="fab fa-lg fa-instagram"></i>
        </span>
      </a>
            <a className="navbar-item" href="https://twitter.com/blackfriendsdin" target="blank">
              <span className="icon" style={{ color: '#fff',}}>
                <i className="fab fa-lg fa-twitter"></i>
              </span>
            </a>
            <a className="navbar-item" href="https://www.facebook.com/BlackFriendsDinner/" target="blank">
              <span className="icon" style={{ color: '#fff',}}>
                <i className="fab fa-lg fa-facebook"></i>
              </span>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header