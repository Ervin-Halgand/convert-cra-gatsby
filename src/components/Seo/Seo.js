import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
export const Seo = ({ title, description, slug }) => {
    return (
        <StaticQuery query={graphql
            `query getSiteMetaData {
                allSite {
                  edges {
                    node {
                      siteMetadata {
                        author
                        title
                        description
                        url
                      }
                    }
                  }
                }
              }`
        }
            render={data => {
                const metaKeywords = ["imc", "ffmi", "metabolisme", "santé", "muscle", "calculateur"];
                return <div className="application">
                    <Helmet
                        htmlAttributes={{
                            lang: 'fr',
                        }}
                        title={title || data.allSite.edges[0].node.siteMetadata.title}
                        meta={[
                            {
                                name: `description`,
                                content: description || data.allSite.edges[0].node.siteMetadata.description
                            },
                            {
                                property: `og:title`,
                                content: title || data.allSite.edges[0].node.siteMetadata.title
                            },
                            {
                                name: `og:description`,
                                content: description || data.allSite.edges[0].node.siteMetadata.description
                            },
                            {
                                name: `og:type`,
                                content: "website"
                            },
                            {
                                property: `og:image`,
                                content: data.allSite.edges[0].node.siteMetadata.image
                            },
                            {
                                property: `og:url`,
                                content: data.allSite.edges[0].node.siteMetadata.url + slug
                            },
                            {
                                property: `og:site_name`,
                                content: data.allSite.edges[0].node.siteMetadata.title
                            },
                            {
                                name: `twitter:creator`,
                                content: data.allSite.edges[0].node.siteMetadata.author
                            },
                            {
                                name: `twitter:card`,
                                content: "summary_large_image"
                            },
                            {
                                property: `twitter:title`,
                                content: title || data.allSite.edges[0].node.siteMetadata.title
                            },
                            {
                                name: `twitter:description`,
                                content: description || data.allSite.edges[0].node.siteMetadata.description
                            },
                            {
                                property: `twitter:image`,
                                content: data.allSite.edges[0].node.siteMetadata.image
                            },
                            {
                                name: "keyword",
                                content: metaKeywords.join(', ')
                            }
                        ]}
                    >
                        <link rel='canonical' href={`${data.allSite.edges[0].node.siteMetadata.url}${slug}`} />
                        <link rel='shortcut icon' href={data.allSite.edges[0].node.siteMetadata.image} />

                    </Helmet>
                </div>
            }
            } />
    );
};


