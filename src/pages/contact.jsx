import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '~/utils/styles';
import ContactFormContainer from '~/components/ContactFormContainer';
import SEO from '~/components/seo';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  padding: 20px 0;
  /* border-bottom: 1px solid ${props => props.theme.colors.dark}; */
  h2 {
    font-size: ${props => props.theme.fontSize.medium};
    margin-bottom: 20px;
    padding-bottom: 5px;
    border-bottom: 1px solid ${props => props.theme.colors.dark};
  }

  .phone {
    color: ${props => props.theme.colors.darkLight};
    &:hover {
      color: ${props => props.theme.colors.pb};
    }
  }
  
  .map-1 {
    margin-bottom: 40px;
  }
  #contact-maps {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Maps = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  iframe {
    margin: 10px 0 20px 0;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
  p {
    text-align: center;
  }
  div {
    margin: 5px 15px;
  }
`;

function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        keywords={[
          'contact',
          'send a message',
          'dog treats',
          'peanut butter',
          'subscription',
          'dogs',
        ]}
        description="Contact page of Peanut Butter Dog Treats"
      />
      <PageWrapper>
        <h1>Contact</h1>
        <Section>
          <h2>Phone</h2>
          <p>
            Call or text us at{' '}
            <a className="phone" href="tel:2148105668">
              214-810-5668
            </a>
          </p>
        </Section>
        <Section>
          <h2>Visit</h2>
          <Maps>
            <div>
              <p>The Market at Luscombe Farms</p>
              <iframe
                title="luscombe-map"
                className="map-1"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.8924540731714!2d-96.57324068454211!3d33.321626980811004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c72709decad9f%3A0xb9cc805425d70991!2sLuscombe%20Farm%20Specialty%20Food%20Store!5e0!3m2!1sen!2sbe!4v1595860680095!5m2!1sen!2sbe"
                width="280"
                height="350"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
              ></iframe>
            </div>
            <div>
              <p>Denison Farmers Market</p>
              <iframe
                title="denison-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.180844244569!2d-96.54764442009964!3d33.755992380782075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c85abd2206fe1%3A0x3d961609e51bad11!2sDowntown%20Denison%20Farmers%20Market!5e0!3m2!1sen!2sbe!4v1595860721838!5m2!1sen!2sbe"
                width="280"
                height="350"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
              ></iframe>
            </div>
          </Maps>
        </Section>
        <Section>
          <h2>Send a message</h2>
          <ContactFormContainer />
        </Section>
      </PageWrapper>
    </>
  );
}

export default Contact;
