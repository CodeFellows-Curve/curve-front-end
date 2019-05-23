import React from 'react'
import SEO from '../components/seo'

import Layout from '../components/layout'
import Blurb from '../components/about/blurb.js'
import Cards from '../components/about/cards.js'



const About = () => (
  <Layout>
    <SEO title="About Us" />

    <Blurb />
    <Cards />
  </Layout>
)

export default About