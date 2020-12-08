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

              <div className="column is-4 is-offset-1 has-text-centered" >

              <p>Copyright 2020 Ian Forrest Web Development.</p>
                
              
              </div>
              

            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
