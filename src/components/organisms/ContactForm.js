import React, { useState } from "react";
import { Link } from "gatsby";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { emailRegex, phoneRegex } from "../../constants/regex";
import Button from "../atoms/Button";
import FormCheckbox from "../moleculas/FormCheckbox";
import FormInput from "../moleculas/FormInput";
import { Clamp } from "../../utils/functions";
import { Error } from "../atoms/Icons";
import Loader from "../atoms/Loader";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  const [ emailStatus, setEmailStatus ] = useState({ sent: false })

  const onSubmit = (data) => {
    setEmailStatus({ sent: true });
    fetch('/api/contact', {
      method: 'POST', 
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
      if(response.success){
        setEmailStatus(prevStatus => ({ ...prevStatus, success: true }));
      } else {
        setEmailStatus(prevStatus => ({ ...prevStatus, success: false }));
      }
    })
    .catch(() => {
      setEmailStatus(prevStatus => ({ ...prevStatus, success: false }));
    })
    reset()
  }

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)} data-variant="dark">
      {(emailStatus.success || emailStatus.success === false) && (
        emailStatus.success ? (
          <div className="status">
            <h3>Dziękujemy za kontakt.</h3>
            <p>Odpowiemy najszybciej, jak to możliwe!</p>
            <Button theme="secondary" onClick={() => setEmailStatus({ sent: false })}>Wypełnij ponownie</Button>
          </div>
        ) : (
          <div className="status status-error">
            <Error />
            <h3>Coś poszło nie tak.</h3>
            <p>Prosimy o ponowne wypełnienie formularza.</p>
            <Button theme="secondary" onClick={() => setEmailStatus({ sent: false })}>Wypełnij ponownie</Button>
          </div>
        )
      )}
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
        <Button disabled={emailStatus.sent}>
          {emailStatus.sent && (
            <Loader />
          )}
          <span>Wyślij</span>
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  position: relative;
  .status {
    animation: statusShow .3s forwards;
    @keyframes statusShow {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    p {
      font-size: ${Clamp(16, 18, 20)};
      margin: 12px 0 32px;
    }
    button {
      max-width: 400px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    inset: -2px;
    @media (max-width: 599px){
      inset: 0 calc(var(--pageMargin) * -1);
    }
    padding: var(--pageMargin);
    background-color: var(--secondary-500);
    border-radius: 10px;
    z-index: 2;
    &.status-error {
      background-color: var(--neutral-100);
      svg {
        color: var(--error);
        width: 32px;
        height: 32px;
        margin-bottom: 12px;
      }
    }
  }
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