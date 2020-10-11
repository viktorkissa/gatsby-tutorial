import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

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

const Component = () => (
  <StaticQuery
    query={getSiteMetaData}
    render={data => <h4>---{data.site.info.description}---</h4>}
  />
);

export default Component;