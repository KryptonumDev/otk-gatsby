import React, { useState } from "react";
import { Link } from "gatsby";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { EBOOK_GROUPID } from "../../constants/data";
import { emailRegex, phoneRegex } from "../../constants/regex";
import Button from "../atoms/Button";
import FormCheckbox from "../moleculas/FormCheckbox";
import FormInput from "../moleculas/FormInput";

const ContactForm = ({ data }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  const [ isEmailSent, setIsEmailSent ] = useState(false)

  const onSubmit = (data) => {
    fetch('/api/newsletter', {
      method: 'POST', 
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({id: EBOOK_GROUPID, ...data})
    })
    .then(response => response.json())
    .then(response => {
      if(response.success){
        setIsEmailSent(true);
      } else {
        setIsEmailSent(false);
      }
    })
    .catch(() => {
      setIsEmailSent(false);
    })
    reset()
  }


  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)} data-variant="dark">
      <FormInput
        type="text"
        placeholder="Imię"
        register={register('name', { required: true })}
        errors={errors}
      />
      <FormInput
        type="text"
        placeholder="Nazwisko"
        register={register('surname')}
        errors={errors}
      />
      <FormInput
        type="tel"
        placeholder="Numer telefonu"
        register={register('tel', { pattern: phoneRegex })}
        error="Nieprawidłowy format telefonu"
        errors={errors}
      />
      <FormInput
        type="email"
        placeholder="Email"
        register={register('email', { required: true, pattern: emailRegex })}
        errors={errors}
      />
      <FormInput
        textarea={true}
        placeholder="Wiadomość"
        register={register('message', { required: true })}
        errors={errors}
      />
      <FormCheckbox
        text={<>Akceptuję{' '}<Link to="/polityka-prywatnosci">politykę prywatności</Link></>}
        register={register('legal', { required: true })}
        errors={errors}
      />
      <div className="cta-wrapper">
        <Button>Wyślij</Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  &[data-variant="dark"] {
    --error: #CB3C1D;
    --form-tick: var(--neutral-100);
    --form-input: var(--dark-300);
    --form-link: var(--primary-500);
  }
  .cta-wrapper {
    &, .cta {
      width: 100%;
    }
    margin-top: 21px;
  }
`

export default ContactForm;