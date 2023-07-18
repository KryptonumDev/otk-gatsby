import { Link } from "gatsby";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { NEWSLETTER_GROUPID } from "../../constants/data";
import { emailRegex } from "../../constants/regex";
import Button from "../atoms/Button";
import FormCheckbox from "../moleculas/FormCheckbox";
import FormInput from "../moleculas/FormInput";

const NewsletterForm = ({ cta, variant }) => {
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
      body: JSON.stringify({id: NEWSLETTER_GROUPID, ...data})
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
    <Wrapper onSubmit={handleSubmit(onSubmit)} data-variant={variant}>
      <FormInput
        type="email"
        placeholder="Email"
        register={register('email', { required: true, pattern: emailRegex })}
        errors={errors}
      />
      <FormCheckbox
        text={<>Akceptuję{' '}<Link to="/polityka-prywatnosci">politykę prywatności</Link></>}
        register={register('legal', { required: true })}
        errors={errors}
      />
      <div className="cta-wrapper">
        <Button theme="primary">{cta}</Button>
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
  .formItem {
    &:not(:last-child){
      margin-bottom: 13px;
    }
  }
  .formItem {
    max-width: 500px;
  }
  .cta-wrapper {
    margin-top: 21px;
  }
`

export default NewsletterForm;