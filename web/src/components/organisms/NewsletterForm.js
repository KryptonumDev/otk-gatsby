import { Link } from "gatsby";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { NEWSLETTER_GROUPID } from "../../constants/data";
import { emailRegex } from "../../constants/regex";
import { Clamp } from "../../utils/functions";
import Button from "../atoms/Button";
import { Error } from "../atoms/Icons";
import Loader from "../atoms/Loader";
import FormCheckbox from "../moleculas/FormCheckbox";
import FormInput from "../moleculas/FormInput";

const statusAnimationDuration = 300;

const NewsletterForm = ({ cta, variant }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  const [sentStatus, setSentStatus] = useState({ sent: false })

  const onSubmit = (data) => {
    setSentStatus({ sent: true });
    fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ groupId: NEWSLETTER_GROUPID, ...data })
    })
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          setSentStatus(prevStatus => ({ ...prevStatus, success: true }));
          reset()
        } else {
          setSentStatus(prevStatus => ({ ...prevStatus, success: false }));
        }
      })
      .catch(() => {
        setSentStatus(prevStatus => ({ ...prevStatus, success: false }));
      })
  }

  const handleSentAgain = (e) => {
    e.target.closest('.status').classList.add('hide');
    setTimeout(() => {
      setSentStatus({ sent: false })
    }, statusAnimationDuration);
  }

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)} data-variant={variant}>
      {sentStatus.success !== undefined && (
        sentStatus.success ? (
          <div className="status">
            <h3>Dziękujemy za zapis do newslettera!</h3>
            <p>Potwierdź swój adres mailowy, klikając w przycisk w mailu, który od nas niebawem otrzymasz. Będziesz na bieżąco z aktualnościami z Naszej Przychodni.</p>
          </div>
        ) : (
          <div className="status status-error">
            <h3>
              <Error />
              <span>Coś poszło nie tak.</span>
            </h3>
            <p>Prosimy o ponowne wypełnienie formularza.</p>
            <Button type="button" theme="secondary" onClick={(e) => handleSentAgain(e)}>Wypełnij ponownie</Button>
          </div>
        )
      )}
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
        <Button theme="primary" disabled={sentStatus.sent && sentStatus.success === undefined} title={cta}>
          {(sentStatus.sent && sentStatus.success === undefined) && (
            <Loader />
          )}
          <span>{cta}</span>
        </Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  position: relative;
  .status {
    animation: statusShow ${statusAnimationDuration}ms forwards;
    &.hide {
      animation: statusHide ${statusAnimationDuration}ms forwards;
    }
    @keyframes statusShow { from { opacity: 0 } to { opacity: 1 } }
    @keyframes statusHide { to { opacity: 0 } }
    color: var(--dark-500);
    p {
      font-size: ${Clamp(16, 18, 20)};
      margin-top: 12px;
    }
    button {
      margin-top: 32px;
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
      h3 {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--error);
        svg {
          width: 32px;
          height: 32px;
        }
      }
    }
  }
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
