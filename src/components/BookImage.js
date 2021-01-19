import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'


export const BookImage = props => {
    const bookImageData = useStaticQuery(graphql`
        query {
            imageOne: file(relativePath: { eq: "severance.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                }
            }
            }
        }
        
        `);

    return <Img fluid={bookImageData.imageOne.childImageSharp.fluid}/>;

} 


export default BookImage


