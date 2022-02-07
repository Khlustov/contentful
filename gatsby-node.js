const path = require(`path`);

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;
    deletePage(page);
    createPage({
        ...page,
        context: {
            ...page.context
        }
    })
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const contentfulPageTemplate = path.resolve(`src/templates/ContentfulPageTemplate/ContentfulPageTemplate.js`);
    const contentfulPage = await graphql(
        `
          query ContentfulPageQuery {
            allContentfulTemplate {
              nodes {      
                slug
              }
            }
          }
        `
    ).then(result => {
        if(result.errors) {
            throw result.errors
        }

        result.data.allContentfulTemplate.nodes.forEach(node => {
            const slug = node.slug;

            createPage({
                path: `/${slug}`,
                component: contentfulPageTemplate,
                context: {
                    slug: slug,
                }
            })
        })
    })
}