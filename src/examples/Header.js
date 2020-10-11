import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import Layout from '../components/layout';

const getSiteMetaData = graphql`
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

const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name }
      }
    }
  } = useStaticQuery(getSiteMetaData);

  return (
    <Layout>
      <ol>
        <li>Title: {title}</li>
        <li>Name: {name}</li>
      </ol>
    </Layout>
  )
}

export default Header;