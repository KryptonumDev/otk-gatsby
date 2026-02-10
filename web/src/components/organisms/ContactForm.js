import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { emailRegex, phoneRegex } from "../../constants/regex";
import Button from "../atoms/Button";
import FormCheckbox from "../moleculas/FormCheckbox";
import FormInput from "../moleculas/FormInput";
import Select from "../moleculas/Select";
import { Clamp } from "../../utils/functions";
import { Error } from "../atoms/Icons";
import Loader from "../atoms/Loader";

const statusAnimationDuration = 300;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onSubmit' })

  const [sentStatus, setSentStatus] = useState({ sent: false })

  const onSubmit = (data) => {
    setSentStatus({ sent: true });
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          setSentStatus(prevStatus => ({ ...prevStatus, success: true }));
          reset();
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
    <Wrapper onSubmit={handleSubmit(onSubmit)} data-variant="dark">
      {sentStatus.success !== undefined && (
        sentStatus.success ? (
          <div className="status">
            <h3>Dziękujemy za kontakt.</h3>
            <p>Odpowiemy najszybciej, jak to możliwe!</p>
            <Button type="button" theme="secondary" onClick={(e) => handleSentAgain(e)}>Wypełnij ponownie</Button>
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
      <Select
        label="Wybierz ośrodek"
        register={register('center', { required: true })}
        options={['Ośrodek Zdrowia w Turośni Kościelnej', 'Ośrodek Zdrowia Filia w Surażu']}
        error="Ośrodek nie został wybrany"
        errors={errors}
      />
      <Select
        label="Wybierz temat"
        register={register('subject', { required: true })}
        options={['Chcę zapisać się do przychodni', 'Chcę umówić wizytę u lekarza rodzinnego (NFZ)', 'Chcę umówić wizytę prywatną', 'Chcę skorzystać z porady dietetyka', 'Potrzebuję przedłużenia recepty', 'Chcę skorzystać z Opieki Koordynowanej', 'Nie mogę znaleźć odpowiedzi na nurtujące mnie pytanie', 'Inny temat']}
        error="Temat nie został wybrany"
        errors={errors}
      />
      <FormInput
        textarea={true}
        placeholder="Wiadomość"
        register={register('message', { required: true })}
        errors={errors}
      />
      <FormCheckbox
        text={<>Akceptuję{' '}<a href="/polityka-prywatnosci" target="_blank" rel="noreferrer">politykę prywatności</a></>}
        register={register('legal', { required: true })}
        errors={errors}
      />
      <div className="cta-wrapper">
        <Button disabled={sentStatus.sent && sentStatus.success === undefined} title={'Wyślij'}>
          {(sentStatus.sent && sentStatus.success === undefined) && (
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
    animation: statusShow ${statusAnimationDuration}ms forwards;
    &.hide {
      animation: statusHide ${statusAnimationDuration}ms forwards;
    }
    @keyframes statusShow { from { opacity: 0 } to { opacity: 1 } }
    @keyframes statusHide { to { opacity: 0 } }
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
  .cta-wrapper {
    &, .cta {
      width: 100%;
    }
    margin-top: 21px;
  }
`

export default ContactForm;
