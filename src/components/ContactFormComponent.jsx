import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  .contact-form-input {
    padding: 10px 6px;
    line-height: 1.2em;
    font-size: 1em;
    text-align: center;
    border-radius: 8px;
    outline: none;
    border: 1px solid grey;
    margin: 10px;
    background: #fbfaff;
    width: 100%;
  }
  input {
    width: 100%;
  }
  textarea {
    width: 100%;
    resize: none;
    height: 150px;
  }
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  width: 90%;
  max-width: 500px;
  small {
    font-size: 0.7em;
  }
  #email {
    border: ${props => (props.showErrors ? '2px solid red' : '1px solid grey')};
  }
`;

const Buttons = styled.div`
  display: flex;
  display: grid;
  grid-auto-flow: column;
  gap: 30px;
  margin: 5px 0;
`;

function ContactFormComponent({
  handleChange,
  data,
  handleSubmit,
  showErrors,
  formErrors,
}) {
  return (
    <FormWrapper>
      <FormBox showErrors={showErrors}>
        <label htmlFor="email">* Email:</label>
        <input
          className="contact-form-input"
          type="email"
          id="email"
          name="email"
          placeholder="youremail@example.com"
          onChange={e => handleChange(e)}
          value={data.email}
        />
      </FormBox>

      <FormBox>
        <label htmlFor="phone">Phone:</label>
        <input
          className="contact-form-input"
          type="tel"
          id="phone"
          name="phone"
          placeholder="Your phone number here."
          onChange={e => handleChange(e)}
          value={data.phone}
        />
      </FormBox>

      <FormBox>
        <label htmlFor="subject">Subject:</label>
        <input
          className="contact-form-input"
          type="subject"
          id="subject"
          name="subject"
          placeholder="Subject of your message here."
          onChange={e => handleChange(e)}
          value={data.subject}
        />
      </FormBox>

      <FormBox>
        <label htmlFor="message">Message:</label>
        <textarea
          className="contact-form-input"
          id="message"
          name="message"
          placeholder="Your message here"
          onChange={e => handleChange(e)}
          value={data.message}
        />
      </FormBox>

      <Buttons>
        <Button type="submit" onClick={e => handleSubmit(e)}>
          Submit
        </Button>
      </Buttons>
    </FormWrapper>
  );
}

ContactFormComponent.propTypes = {
  handleChange: PropTypes.func,
  data: PropTypes.object,
  handleSubmit: PropTypes.func,
  formErrors: PropTypes.object,
  showErrors: PropTypes.bool,
};

export default ContactFormComponent;
