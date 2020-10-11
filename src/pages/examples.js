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
      <h1>Examples Page - {author}</h1>
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
