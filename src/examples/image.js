import React from "react"
import { compose, graphql } from "gatsby"
import img from "../images/image_3.jpg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image_3.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          src
        }
      }
    }
    fluid: file(relativePath: { eq: "image_1.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`
const image = () => {
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
      </article>
    </section>
  )
}

export default image
