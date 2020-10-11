import React from 'react';
import { graphql } from "gatsby";

import Header from '../examples/Header';
import HeaderStatic from "../examples/HeaderStatic";

export default ({data}) => {
  const {
    site: {
      info: {
        author
      }
    }
  } = data;

  return (
    <>
      <p>Examples Page - {author}</p>
      <Header />
      <HeaderStatic />
    </>
  )
};

export const data = graphql`
    {
        site {
            info: siteMetadata {
                person {
                    age
                    name
                }
                author
                data
                description
                title
            }
        }
    }
`;
