import React from 'react';
import { graphql } from "gatsby";
import Image from 'gatsby-image';
import {Link} from 'gatsby';

import Layout from '../components/layout';

import css from '../styles/products.module.scss';

const Products = ({ data }) => {
  const {
    allContentfulProduct: {
      nodes: products
    }
  } = data;

  return (
    <Layout>
      <section className={css.page}>
        {
          products.map(product => <article key={product.id} className={css.product}>
            <Image fluid={product.image.fluid} alt={product.title} />
            <h3>{product.title} <span>{product.price}</span></h3>
            <Link to={`/products/${product.slug}`}>more details</Link>
          </article>)
        }
      </section>
    </Layout>
  )
}

export const query = graphql`
    {
        allContentfulProduct {
            nodes {
                id
                title
                price
                slug
                image {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
    }
`;

export default Products;