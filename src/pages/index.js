import * as React from "react"
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../layouts/layout.js'
import HeaderGallery from '../components/header-gallery/header-gallery.component'
import MosaicIssueGallery from '../components/mosaic-issue-gallery/mosaic-issue-gallery.component'

const IndexPage = ({data: {sanitySiteContent, allSanityFeatureInterview}}) => {

  return (
    <Layout>
      <SEO 
        title={'Home'}
        description={'The homepage of In The Know Local'}
        image={sanitySiteContent.headerMainImage.image.asset.fluid.srcWebp}
        pathname={'/'}
      />
      <HeaderGallery mainImage={sanitySiteContent.headerMainImage} sideTopImage={sanitySiteContent.headerSideBottomImage} sideBottomImage={sanitySiteContent.headerSideTopImage} />
      <MosaicIssueGallery features={allSanityFeatureInterview.nodes} featuredInterviews={sanitySiteContent.featuredInterviews} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query IndexPageQuery {
  sanitySiteContent(_id: {eq: "b94b08cf-84ca-4296-a7da-7f7716e55de6"}) {
    headerMainImage {
      image {
        asset {
          fluid {
            srcWebp
          }
        }
      }
      alt
    }
    headerSideBottomImage {
      image {
        asset {
          fluid {
            srcWebp
          }
        }
      }
      alt
    }
    headerSideTopImage {
      alt
      image {
        asset {
          fluid {
            srcWebp
          }
        }
      }
    }
    featuredInterviews {
      id
    }
  }
  allSanityFeatureInterview {
    nodes {
      id
      interviewCover {
      image {
          asset {
          fluid {
              srcWebp
          }
          }
      }
      alt
      }
      slug {
          current
      }
    }
  }
}
`
