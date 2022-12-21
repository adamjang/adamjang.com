import React, { Component } from 'react';

import './Home.css'

const clientID = '104d9b56e480e63ceb9ac6e855d5e167c53789ac8bf3fbb6e013a3b6993af174'
const user = 'adamjang'
const collectionId = 2028730


class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      background: null,
      stats: {}
    }

    this.getPhotoStats = this.getPhotoStats.bind(this)
    this.setBackground = this.setBackground.bind(this)
  }

  componentWillMount() {
    fetch(`https://api.unsplash.com/collections/${collectionId}/photos/?client_id=${clientID}&v=1`)
      .then(res => res.json())
      .then(data => this.setBackground(data))
    // fetch(`https://api.unsplash.com/users/${user}/photos/?client_id=${clientID}&order_by=popular`)
    //   .then(res => res.json())
    //   .then(data => this.setBackground(data))
  }

  getPhotoStats(id) {
    fetch(`https://api.unsplash.com/photos/${id}/statistics/?client_id=${clientID}`)
      .then(res => res.json())
      .then(stats => this.setState({ stats }))
  }

  setBackground(photos = []) {
    if(photos.length > 0) {
      const random = Math.floor(Math.random() * photos.length)
      const photo = photos[random]


      if(photo && photo.urls) {
        const img = new Image()
        img.onload = () => {
          this.setState({ background: photo.urls.full })
          // this.getPhotoStats(photo.id)
        }
        img.src = photo.urls.full
      }
    }
  }

  render() {
    const loaded = (this.state.background) ? 'is-loaded' : ''

    const backgroundProps = {
      className: `app-background ${loaded}`,
      style: {
        backgroundImage: `url(${this.state.background})`
      }
    }

    const overlayProps = {
      style: {
        backgroundColor: this.state.overlayColor
      }
    }

    return (
      <div className="app">
        <div className="app-content">
          <div className="app-content__inner">
            <p className="app-intro app-intro--large">Hello!</p>
            <p className="app-intro">My name is Adam Jang and I am a Front-End Developer based in Toronto, Canada. I am currently looking for new freelance opportunities.</p>
            <ul className="app-social">
              <li>
                <a href="mailto:contact@adamjang.com">Email</a>
              </li>
              <li>
                <a href="https://instagram.com/adamjang">Instagram</a>
              </li>
              <li>
                <a href="https://twitter.com/adamjang">Twitter</a>
              </li>
              <li>
                <a href="https://unsplash.com/@adamjang">Unsplash</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/adamjang/">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
          <ul className="app-stats">
            {this.state.stats.views ? (
            <li>
              <div className="app-stats__count">{this.state.stats.views.total.toLocaleString()}</div>
              <div className="app-stats__title">Views</div>
            </li>
            ) : null}
            {this.state.stats.downloads ? (
            <li>
              <div className="app-stats__count">{this.state.stats.downloads.total.toLocaleString()}</div>
              <div className="app-stats__title">Downloads</div>
            </li>
            ) : null}
            {this.state.stats.likes ? (
            <li>
              <div className="app-stats__count">{this.state.stats.likes.total.toLocaleString()}</div>
              <div className="app-stats__title">Likes</div>
            </li>
            ) : null}
          </ul>
        <div className="app-background--overlay" />
        <div {...backgroundProps} />
      </div>
    )
  }
}

export default Home;
