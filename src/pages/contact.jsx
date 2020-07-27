import React from 'react'
import styled from 'styled-components'
import { PageWrapper } from '~/utils/styles'
import ContactFormContainer from '~/components/ContactFormContainer'

function Contact() {
  return (
    <PageWrapper>
      <h1>Contact</h1>
      <ContactFormContainer />
    </PageWrapper>
  )
}

export default Contact
