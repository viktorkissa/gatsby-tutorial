import React from 'react';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from "gatsby";

import img from '../images/new/img-3.jpg';

const getImages = graphql`
    {
        fixed:file(relativePath:{eq:"img-1.jpg"}) {
            childImageSharp {
                fixed(width:100,height:100) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        fluid:file(relativePath:{eq:"img-2.jpg"}) {
            childImageSharp{
                fluid{
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
        example: file(relativePath: { eq: "img-2.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
    }
`;

const Images = () => {
  const data = useStaticQuery(getImages);
  const {
    fixed: {
      childImageSharp: { fixed }
    },
    fluid: {
      childImageSharp: { fluid }
    }
  } = data;

  return (
    <section className='images'>
      <article className='single-image'>
        <h3>Basic Image</h3>
        <img src={img} width="100%" />
      </article>
      <article className='single-image'>
        <h3>Fixed Image/Blur</h3>
        <Image fixed={fixed} />
      </article>
      <article className='single-image'>
        <h3>Fluid Image/Svg</h3>
        <Image fluid={fluid} />
        <Image fluid={data.example.childImageSharp.fluid} />
      </article>
    </section>
  )
};

export default Images;