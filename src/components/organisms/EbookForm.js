import { Link } from "gatsby";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { EBOOK_GROUPID } from "../../constants/data";
import { emailRegex } from "../../constants/regex";
import { Clamp } from "../../utils/functions";
import Button from "../atoms/Button";
import { Error } from "../atoms/Icons";
import Loader from "../atoms/Loader";
import FormCheckbox from "../moleculas/FormCheckbox";
import FormInput from "../moleculas/FormInput";

const statusAnimationDuration = 300;

const EbookForm = ({ data, variant='light' }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  const [ sentStatus, setSentStatus ] = useState({ sent: false })

  const onSubmit = (data) => {
    setSentStatus({ sent: true });
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
        setSentStatus(prevStatus => ({ ...prevStatus, success: true }));
        reset()
      } else {
        setSentStatus(prevStatus => ({ ...prevStatus, success: false }));
        reset()
      }
    })
    .catch(() => {
      setSentStatus(prevStatus => ({ ...prevStatus, success: false }));
      reset()
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
            <h3>Dziękujemy za pobranie naszego e-booka!</h3>
            <p>Potwierdź swój adres mailowy, klikając w przycisk w mailu, który od nas niebawem otrzymasz. Mamy nadzieję, że wiedza w nim zawarta będzie przydatna.</p>
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
        <Button variant={variant} theme="primary" disabled={sentStatus.sent && sentStatus.success === undefined}>
          {(sentStatus.sent && sentStatus.success === undefined) && (
            <Loader />
          )}
          <span>{data.formCta}</span>
        </Button>
        {data.cta && (
          <Button variant={variant} theme={data.cta.theme} to={data.cta.href}>{data.cta.text}</Button>
        )}
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
      inset: -1px calc(var(--pageMargin) * -1);
    }
    padding: var(--pageMargin);
    background-color: var(--secondary-500);
    border-radius: 10px;
    z-index: 2;
    &.status-error {
      --error: #CB3C1D;
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
      margin-bottom: 21px;
    }
  }
  .formItem {
    max-width: 500px;
  }
  .cta-wrapper {
    margin-top: 34px;
  }
`

export default EbookForm;