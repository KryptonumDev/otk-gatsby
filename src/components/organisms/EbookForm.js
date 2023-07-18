import { Link } from "gatsby";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { EbookGroupID } from "../../constants/data";
import { emailRegex } from "../../constants/regex";
import Button from "../atoms/Button";
import FormCheckbox from "../moleculas/FormCheckbox";
import FormInput from "../moleculas/FormInput";

const EbookForm = ({ data }) => {
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
      body: JSON.stringify({id: EbookGroupID, ...data})
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
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
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
        <Button variant="light" theme="primary">{data.formCta}</Button>
        <Button variant="light" theme={data.cta.theme} to={data.cta.href}>{data.cta.text}</Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.form`
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

export default EbookForm;