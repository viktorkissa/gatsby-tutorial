import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"

const productTemplate = ({ data: { product: { title, price, image: { fixed }, info: { info } } } }) => {

  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to='/products'>back to products</Link>
        <h1>Single Product: {title}</h1>
      </div>
      <div className='single-product'>
        <div>
          <Image fixed={fixed} alt={title} />
        </div>
        <div>
          <h2>{title}</h2>
          <h3>${price}</h3>
          <p>{info}</p>
          <button>add to cart</button>
        </div>
      </div>
    </Layout>
  )
}

export default productTemplate

export const query = graphql`
    query getSingleProduct($slug:String) {
        product: contentfulProduct(slug: {eq: $slug}) {
            title
            price
            info {
                info
            }
            image {
                fixed (width: 300) {
                    ...GatsbyContentfulFixed
                }
            }
        }
    }

`