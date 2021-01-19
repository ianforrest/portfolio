import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'


import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import BookShelf from '../components/BookShelf'
import ianphoto from '../img/ian-forrest-41.jpg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import github from '../img/social/github.svg'
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
   
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
              <div className="columns">
                <div className="column is-10">
                  <div className="content">
                    <div className="tile home-intro">
                      <h2 className="title is-size-2">{mainpitch.title}</h2>
                    </div>
                    <div className="tile home-intro">
                      <h2 className="description is-size-3">{mainpitch.description}</h2>
                    </div>
                  </div> 

                  </div>
               
               
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

    </section>

    <section className="section section-light">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="bio-container">
                  <div className="bio-avatar">
                    <div className="bio-avatar-inner">
                      <img
                        src={ianphoto}
                        alt="Ian Forrest"
                      />
                    </div>
                 </div>
                  <p className="bio-text">{intro.description}</p> <div className="social"><a title="github" href="https://github.com/ianforrest">
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
                </a></div> 
                </div>
            
              </div>

                
              <div className="content">

                
                    <BookShelf />

                    <h2>{subheading}</h2>
                    <p>And here's what I've been working on (for fun.)</p>
                  
                    <BlogRoll />

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 520, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
