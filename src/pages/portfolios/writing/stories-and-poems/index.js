import React from "react"

import Layout from "../../../../components/layout/Layout"
import SingleColumn from "../../../../components/layout/SingleColumn"
import Spacer from "../../../../components/layout/Spacer"
import Section from "../../../../components/layout/Section"

const StoriesAndPoems = ( ) => {
  
  return (
      <Layout>
      <SingleColumn>
        <Section>
          <h1>stories and poems page</h1>
        </Section>
        <Spacer size="large" />
        <Section direction="row">
        </Section>
        </SingleColumn>
      </Layout>
  )
}

export default StoriesAndPoems