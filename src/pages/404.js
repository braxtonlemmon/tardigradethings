import React from 'react';
import styled from 'styled-components';
import { MdMoodBad } from 'react-icons/md';
import SEO from '~/components/seo';
import { PageWrapper } from '~/utils/styles';

const Content = styled.p`
  width: 80%;
  max-width: 500px;
  margin-top: 20px;
  text-align: center;
  line-height: 1.5em;
`;

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <PageWrapper>
      <h1>OOPS</h1>
      <MdMoodBad size={70} />
      <Content>
        Sorry, no treats here. It looks like you were headed somewhere amazing,
        but got a little lost. Try again!
      </Content>
    </PageWrapper>
  </>
);

export default NotFoundPage;
