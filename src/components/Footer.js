import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/ianforrest.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import github from '../img/social/github.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <hr />
        </div>
        <div className="content">
          <div className="container">

            <div className="columns">

              <div className="column is-4">

              <p>Copyright 2020 Ian Forrest Web Development.</p>
                
              
              </div>
              
              <div className="column is-4 social">
                <a title="github" href="https://github.com/ianforrest">
                  <img
                    src={github}
                    alt="Github"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>

             
                <a title="twitter" href="https://twitter.com/ianforrest">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com/ianforrest">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
